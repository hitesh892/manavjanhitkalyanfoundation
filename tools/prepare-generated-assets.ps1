param(
    [Parameter(Mandatory = $true)]
    [string]$HeroSource,
    [Parameter(Mandatory = $true)]
    [string]$CtaSource,
    [Parameter(Mandatory = $true)]
    [string]$Destination
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path -LiteralPath $Destination)) {
    New-Item -ItemType Directory -Path $Destination | Out-Null
}

function Export-CoverJpeg {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height,
        [long]$Quality = 88
    )

    $source = [System.Drawing.Image]::FromFile($InputPath)
    try {
        $sourceRatio = $source.Width / $source.Height
        $targetRatio = $Width / $Height
        if ($sourceRatio -gt $targetRatio) {
            $cropHeight = $source.Height
            $cropWidth = [int]($cropHeight * $targetRatio)
            $cropX = [int](($source.Width - $cropWidth) / 2)
            $cropY = 0
        } else {
            $cropWidth = $source.Width
            $cropHeight = [int]($cropWidth / $targetRatio)
            $cropX = 0
            $cropY = [int](($source.Height - $cropHeight) / 2)
        }

        $bitmap = [System.Drawing.Bitmap]::new($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        try {
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.DrawImage(
                $source,
                [System.Drawing.Rectangle]::new(0, 0, $Width, $Height),
                [System.Drawing.Rectangle]::new($cropX, $cropY, $cropWidth, $cropHeight),
                [System.Drawing.GraphicsUnit]::Pixel
            )
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
            $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
            try {
                $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, $Quality)
                $bitmap.Save($OutputPath, $codec, $parameters)
            } finally {
                $parameters.Dispose()
            }
        } finally {
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    } finally {
        $source.Dispose()
    }
}

Export-CoverJpeg -InputPath $HeroSource -OutputPath (Join-Path $Destination "campaign-hero-poster.jpg") -Width 1920 -Height 1080 -Quality 88
Export-CoverJpeg -InputPath $CtaSource -OutputPath (Join-Path $Destination "campaign-final-cta.jpg") -Width 1920 -Height 800 -Quality 88

