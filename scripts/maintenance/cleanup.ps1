# Chinmaya Lab Maintenance Script

Write-Host "Cleaning project..."

# Remove Next.js build cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

Write-Host "Cleanup completed."