# Servidor local simples (sem Node/Python). Uso:  powershell -ExecutionPolicy Bypass -File .\serve.ps1
# Abra depois:  http://localhost:4321/     Pare com Ctrl+C.
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4321
$mime = @{
  '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8'
  '.svg'='image/svg+xml'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.png'='image/png'; '.webp'='image/webp'
  '.mp4'='video/mp4'; '.webm'='video/webm'; '.xml'='application/xml; charset=utf-8'; '.json'='application/json; charset=utf-8'
  '.webmanifest'='application/manifest+json'; '.ico'='image/x-icon'; '.txt'='text/plain; charset=utf-8'; '.woff2'='font/woff2'
}
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Servindo `"$root`" em  http://localhost:$port/    (Ctrl+C para parar)"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $p = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($p.EndsWith('/')) { $p += 'index.html' }
    $full = Join-Path $root ($p.TrimStart('/').Replace('/','\'))
    if (-not (Test-Path $full -PathType Leaf)) { $full = Join-Path $root '404.html'; $ctx.Response.StatusCode = 404 }
    $ext = [System.IO.Path]::GetExtension($full).ToLower()
    $ct = $mime[$ext]; if (-not $ct) { $ct = 'application/octet-stream' }
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $ctx.Response.ContentType = $ct
    $ctx.Response.Headers['Cache-Control'] = 'no-store'
    $ctx.Response.ContentLength64 = $bytes.Length
    if ($ctx.Request.HttpMethod -ne 'HEAD') { $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length) }
  } catch { try { $ctx.Response.StatusCode = 500 } catch {} }
  finally { try { $ctx.Response.OutputStream.Close() } catch {} }
}
