param(
    [Parameter(Mandatory = $true)]
    [string]$Source,
    [Parameter(Mandatory = $true)]
    [string]$Destination
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path -LiteralPath $Destination)) {
    New-Item -ItemType Directory -Path $Destination | Out-Null
}

$crops = @(
    @{ Name = "brand-lockup.png"; X = 35; Y = 2; W = 235; H = 36 },
    @{ Name = "campaign-story-founder.jpg"; X = 323; Y = 344; W = 92; H = 112 },
    @{ Name = "timeline-outreach.jpg"; X = 32; Y = 474; W = 119; H = 67 },
    @{ Name = "timeline-hot-meal.jpg"; X = 157; Y = 474; W = 115; H = 67 },
    @{ Name = "shelter-checkin.jpg"; X = 280; Y = 474; W = 115; H = 67 },
    @{ Name = "timeline-breakfast-followup.jpg"; X = 402; Y = 474; W = 124; H = 67 },
    @{ Name = "pass-hot-dinner.jpg"; X = 31; Y = 657; W = 92; H = 83 },
    @{ Name = "pass-safe-bed.jpg"; X = 120; Y = 657; W = 112; H = 83 },
    @{ Name = "pass-hygiene-kit.jpg"; X = 230; Y = 657; W = 112; H = 83 },
    @{ Name = "pass-breakfast.jpg"; X = 340; Y = 657; W = 92; H = 83 },
    @{ Name = "pass-followup.jpg"; X = 430; Y = 657; W = 97; H = 83 },
    @{ Name = "donation-shelter-progress.jpg"; X = 564; Y = 459; W = 241; H = 63 },
    @{ Name = "product-hot-meal.jpg"; X = 568; Y = 673; W = 70; H = 50 },
    @{ Name = "product-safe-bed.jpg"; X = 650; Y = 673; W = 70; H = 50 },
    @{ Name = "product-hygiene-kit.jpg"; X = 736; Y = 673; W = 70; H = 50 },
    @{ Name = "product-rescue-ride.jpg"; X = 568; Y = 844; W = 111; H = 58 },
    @{ Name = "product-10-meals.jpg"; X = 694; Y = 844; W = 111; H = 58 },
    @{ Name = "verification-field-photo.jpg"; X = 407; Y = 870; W = 119; H = 67 },
    @{ Name = "story-beneficiary-01.jpg"; X = 34; Y = 1037; W = 66; H = 89 },
    @{ Name = "story-beneficiary-02.jpg"; X = 189; Y = 1037; W = 66; H = 89 },
    @{ Name = "story-beneficiary-03.jpg"; X = 341; Y = 1037; W = 66; H = 89 },
    @{ Name = "gallery-01.jpg"; X = 37; Y = 1274; W = 92; H = 68 },
    @{ Name = "gallery-02.jpg"; X = 132; Y = 1274; W = 92; H = 68 },
    @{ Name = "gallery-03.jpg"; X = 227; Y = 1274; W = 92; H = 68 },
    @{ Name = "gallery-04.jpg"; X = 330; Y = 1274; W = 92; H = 68 },
    @{ Name = "gallery-05.jpg"; X = 428; Y = 1274; W = 96; H = 68 }
)

$sourceImage = [System.Drawing.Image]::FromFile($Source)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
$quality = [System.Drawing.Imaging.EncoderParameters]::new(1)
$quality.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, 90L)

try {
    foreach ($crop in $crops) {
        $bitmap = [System.Drawing.Bitmap]::new($crop.W, $crop.H)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage(
            $sourceImage,
            [System.Drawing.Rectangle]::new(0, 0, $crop.W, $crop.H),
            [System.Drawing.Rectangle]::new($crop.X, $crop.Y, $crop.W, $crop.H),
            [System.Drawing.GraphicsUnit]::Pixel
        )
        $target = Join-Path $Destination $crop.Name
        if ([System.IO.Path]::GetExtension($target) -eq ".png") {
            $bitmap.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
        } else {
            $bitmap.Save($target, $jpegCodec, $quality)
        }
        $graphics.Dispose()
        $bitmap.Dispose()
    }
} finally {
    $quality.Dispose()
    $sourceImage.Dispose()
}

