#!/usr/bin/env python3
"""
Generate PWA icons for the Crystal Ball app
"""

try:
    from PIL import Image, ImageDraw
    
    def create_icon(size, filename):
        # Create image with gradient-like background
        img = Image.new('RGB', (size, size), color='#1a0033')
        draw = ImageDraw.Draw(img)
        
        # Draw gradient circles (simulating radial gradient)
        center = size // 2
        for i in range(20, 0, -1):
            radius = int(center * (i / 20))
            intensity = int(157 + (26 - i) * 3)  # Gradually lighter purple
            color = f'#{intensity:02x}4edd'
            draw.ellipse(
                [center - radius, center - radius, center + radius, center + radius],
                fill=color
            )
        
        # Draw crystal ball
        ball_radius = int(size * 0.35)
        
        # Ball with purple gradient
        for i in range(ball_radius, 0, -1):
            alpha = int(200 * (i / ball_radius))
            r = int(157 + (ball_radius - i) * 2)
            g = int(78 + (ball_radius - i))
            b = int(221)
            color = (min(r, 255), min(g, 255), min(b, 255))
            draw.ellipse(
                [center - i, center - i, center + i, center + i],
                fill=color
            )
        
        # Add highlight
        highlight_radius = int(ball_radius * 0.3)
        highlight_x = center - int(ball_radius * 0.4)
        highlight_y = center - int(ball_radius * 0.4)
        
        for i in range(highlight_radius, 0, -1):
            alpha = int(255 * (i / highlight_radius))
            color = (255, 255, 255)
            draw.ellipse(
                [highlight_x - i, highlight_y - i, highlight_x + i, highlight_y + i],
                fill=color
            )
        
        img.save(filename)
        print(f"Created {filename}")
    
    create_icon(192, 'icon-192.png')
    create_icon(512, 'icon-512.png')
    print("Icons generated successfully!")
    
except ImportError:
    print("PIL/Pillow not available. Creating simple colored icons...")
    # Fallback: create simple solid color images
    from io import BytesIO
    import base64
    
    # Create minimal PNG manually (this is a hack but works without dependencies)
    print("Please install Pillow with: pip3 install Pillow")
    print("Or open generate-icons.html in a browser to create icons manually")
