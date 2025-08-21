# Divine darshan
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DivineDarshan.AI - Experience Bharat's Spiritual Soul with AI</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --saffron: #FF9933;
            --maroon: #800000;
            --golden: #FFD700;
            --off-white: #FAF9F6;
            --white: #FFFFFF;
            --dark-text: #2C2C2C;
            --light-text: #666666;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: var(--dark-text);
            background-color: var(--off-white);
            overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
            font-weight: 600;
        }

        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: linear-gradient(135deg, var(--saffron), var(--maroon));
            backdrop-filter: blur(15px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(255, 153, 51, 0.3);
        }

        .navbar.scrolled {
            padding: 0.7rem 0;
            transform: scale(0.98);
            box-shadow: 0 8px 32px rgba(128, 0, 0, 0.4);
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--white);
            text-decoration: none;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1rem;
            align-items: center;
            margin-left: auto;
        }

        .nav-menu li {
            position: relative;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--white);
            font-weight: 600;
            font-size: 1rem;
            padding: 0.8rem 1.2rem;
            border-radius: 25px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-menu a:hover {
            background: rgba(255, 215, 0, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
            border-color: var(--golden);
        }

        .nav-menu a:active {
            transform: translateY(0) scale(0.95);
            transition: all 0.1s ease;
        }

        .nav-menu a.active {
            background: linear-gradient(135deg, var(--golden), #FFC107);
            color: var(--maroon);
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
        }

        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 3px;
            background: var(--golden);
            border-radius: 2px;
            animation: underlineGlow 2s ease-in-out infinite alternate;
        }

        @keyframes underlineGlow {
            0% { box-shadow: 0 0 5px var(--golden); }
            100% { box-shadow: 0 0 20px var(--golden), 0 0 30px var(--golden); }
        }

        .nav-emoji {
            font-size: 1.2rem;
            filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
        }

        .try-demo-btn {
            background: linear-gradient(135deg, var(--golden), #FFC107, var(--saffron)) !important;
            color: var(--maroon) !important;
            font-weight: 700 !important;
            padding: 1rem 1.5rem !important;
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4) !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            position: relative;
            overflow: hidden;
        }

        .try-demo-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transition: left 0.5s ease;
        }

        .try-demo-btn:hover::before {
            left: 100%;
        }

        .try-demo-btn:hover {
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6) !important;
        }

        /* Demo Dropdown */
        .demo-dropdown {
            position: relative;
        }

        .dropdown-content {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(255, 153, 51, 0.95);
            backdrop-filter: blur(10px);
            min-width: 320px;
            box-shadow: 0 20px 40px rgba(255, 153, 51, 0.4), 0 8px 16px rgba(0,0,0,0.2);
            border-radius: 12px;
            padding: 1.5rem;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-15px) scale(0.95);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid var(--golden);
            z-index: 1001;
        }

        .demo-dropdown:hover .dropdown-content {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        .dropdown-item {
            display: flex;
            align-items: center;
            padding: 1rem 1.2rem;
            color: var(--maroon);
            text-decoration: none;
            border-radius: 8px;
            margin-bottom: 0.8rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(128, 0, 0, 0.2);
            background: rgba(255, 255, 255, 0.3);
            font-weight: 700;
            font-size: 1rem;
            gap: 0.8rem;
        }

        .dropdown-item .nav-emoji {
            font-size: 1.3rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .dropdown-item:hover {
            background: linear-gradient(135deg, var(--golden), #FFC107);
            color: var(--maroon);
            transform: translateX(8px) scale(1.02);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
            border-color: var(--maroon);
        }

        .dropdown-item:last-child {
            margin-bottom: 0;
        }

        /* Tooltip Styles */
        .tooltip {
            position: relative;
        }

        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: -45px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            color: var(--white);
            padding: 0.5rem 1rem;
            border-radius: 15px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 1001;
        }

        .tooltip::before {
            content: '';
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            border: 6px solid transparent;
            border-bottom-color: var(--maroon);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .tooltip:hover::after,
        .tooltip:hover::before {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(-5px);
        }

        .mobile-menu-toggle {
            display: none;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            padding: 0.8rem;
            font-size: 1.5rem;
            color: var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .mobile-menu-toggle:hover {
            background: rgba(255, 215, 0, 0.3);
            transform: scale(1.1);
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        }

        .mobile-menu-toggle.active {
            transform: rotate(90deg);
            background: var(--golden);
            color: var(--maroon);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(135deg, rgba(255, 153, 51, 0.8), rgba(128, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23FF9933" width="1200" height="800"/><path fill="%23800000" opacity="0.3" d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"/><circle fill="%23FFD700" opacity="0.4" cx="600" cy="200" r="100"/><polygon fill="%23FAF9F6" opacity="0.2" points="600,50 650,150 750,150 675,225 700,325 600,275 500,325 525,225 450,150 550,150"/></svg>');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--white);
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            padding: 0 2rem;
            animation: fadeInUp 1s ease-out;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.95;
            font-weight: 300;
        }

        .language-toggle {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 2rem;
        }

        .lang-btn {
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.2);
            color: var(--white);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .lang-btn.active,
        .lang-btn:hover {
            background: var(--golden);
            color: var(--maroon);
            border-color: var(--golden);
            transform: scale(1.05);
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            cursor: pointer;
            text-align: center;
        }

        .btn-primary {
            background: var(--golden);
            color: var(--maroon);
        }

        .btn-primary:hover {
            background: #FFC107;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: var(--white);
            border: 2px solid var(--white);
        }

        .btn-secondary:hover {
            background: var(--white);
            color: var(--maroon);
            transform: translateY(-2px);
        }

        /* Section Styles */
        .section {
            padding: 5rem 0;
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
        }

        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: var(--maroon);
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: var(--saffron);
        }

        /* About Section */
        .about {
            background: var(--white);
        }

        .about-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 3rem;
            font-size: 1.1rem;
            color: var(--light-text);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .feature-card {
            background: var(--off-white);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(255, 153, 51, 0.1);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 153, 51, 0.2);
        }

        .feature-icon {
            font-size: 3rem;
            color: var(--saffron);
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            color: var(--maroon);
            margin-bottom: 1rem;
        }

        /* How It Works */
        .how-it-works {
            background: linear-gradient(135deg, var(--off-white), rgba(255, 153, 51, 0.05));
        }

        .steps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
        }

        .step {
            text-align: center;
            position: relative;
        }

        .step-number {
            width: 80px;
            height: 80px;
            background: var(--saffron);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 0 auto 1.5rem;
            box-shadow: 0 5px 15px rgba(255, 153, 51, 0.3);
        }

        .step h3 {
            color: var(--maroon);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        /* Features Section */
        .features {
            background: var(--white);
        }

        .features-grid-large {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .feature-card-large {
            background: linear-gradient(135deg, var(--off-white), rgba(255, 215, 0, 0.05));
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .feature-card-large:hover {
            transform: translateY(-8px);
            border-color: var(--saffron);
            box-shadow: 0 15px 40px rgba(255, 153, 51, 0.15);
        }

        .feature-card-large .feature-icon {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
        }

        /* Testimonials Section */
        .testimonials {
            background: linear-gradient(135deg, var(--maroon), rgba(128, 0, 0, 0.9));
            color: var(--white);
        }

        .testimonials .section-title {
            color: var(--white);
        }

        .testimonials .section-title::after {
            background: var(--golden);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .testimonial-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .testimonial-author {
            color: var(--golden);
            font-weight: 600;
        }

        /* Founder Highlight Section */
        .founder-highlight {
            background: linear-gradient(135deg, var(--saffron), var(--maroon));
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding: 6rem 0;
        }

        .founder-bg-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path fill="%23FAF9F6" opacity="0.1" d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"/><polygon fill="%23FFD700" opacity="0.15" points="600,50 650,150 750,150 675,225 700,325 600,275 500,325 525,225 450,150 550,150"/><circle fill="%23FAF9F6" opacity="0.08" cx="200" cy="150" r="80"/><circle fill="%23FFD700" opacity="0.12" cx="1000" cy="600" r="120"/></svg>') no-repeat center center;
            background-size: cover;
            animation: parallaxMove 20s ease-in-out infinite alternate;
        }

        @keyframes parallaxMove {
            0% { transform: translateX(-20px) translateY(-10px); }
            100% { transform: translateX(20px) translateY(10px); }
        }

        .founder-content {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .founder-photo-section {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .founder-photo-wrapper {
            position: relative;
            animation: float 6s ease-in-out infinite;
        }

        .founder-photo-main {
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--golden), #FFC107, var(--saffron));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: var(--maroon);
            position: relative;
            box-shadow: 0 20px 60px rgba(255, 215, 0, 0.4);
            border: 6px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
        }

        .founder-photo-main:hover {
            transform: scale(1.05);
            box-shadow: 0 25px 80px rgba(255, 215, 0, 0.6);
        }

        .photo-glow {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--golden), var(--saffron), var(--golden));
            z-index: -1;
            animation: rotate 8s linear infinite;
            opacity: 0.7;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .founder-badge {
            position: absolute;
            top: -15px;
            right: -15px;
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            color: var(--white);
            padding: 0.8rem 1.2rem;
            border-radius: 25px;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 8px 25px rgba(128, 0, 0, 0.4);
            animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .founder-info-section {
            color: var(--white);
        }

        .founder-header {
            margin-bottom: 2rem;
        }

        .founder-name {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--white), var(--golden));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: textGlow 3s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
            0% { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); }
            100% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
        }

        .founder-title {
            font-size: 1.4rem;
            color: var(--golden);
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        .founder-intro {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 2.5rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .fun-facts-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2.5rem;
        }

        .fun-fact {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255, 255, 255, 0.15);
            padding: 1.2rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }

        .fun-fact:hover {
            transform: translateY(-5px);
            background: rgba(255, 215, 0, 0.2);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .fact-icon {
            font-size: 2rem;
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));
        }

        .fact-text strong {
            display: block;
            font-size: 1rem;
            color: var(--golden);
        }

        .fact-text span {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        .founder-achievements {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2.5rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .founder-social {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .founder-social-icon {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.15);
            color: var(--white);
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .founder-social-icon:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
        }

        .founder-social-icon.instagram:hover { 
            background: linear-gradient(135deg, #E4405F, #C13584); 
            box-shadow: 0 15px 35px rgba(228, 64, 95, 0.4);
        }
        .founder-social-icon.linkedin:hover { 
            background: linear-gradient(135deg, #0077B5, #00A0DC); 
            box-shadow: 0 15px 35px rgba(0, 119, 181, 0.4);
        }
        .founder-social-icon.github:hover { 
            background: linear-gradient(135deg, #333, #555); 
            box-shadow: 0 15px 35px rgba(51, 51, 51, 0.4);
        }
        .founder-social-icon.twitter:hover { 
            background: linear-gradient(135deg, #1DA1F2, #0D8BD9); 
            box-shadow: 0 15px 35px rgba(29, 161, 242, 0.4);
        }
        .founder-social-icon.facebook:hover { 
            background: linear-gradient(135deg, #1877F2, #42A5F5); 
            box-shadow: 0 15px 35px rgba(24, 119, 242, 0.4);
        }
        .founder-social-icon.email:hover { 
            background: linear-gradient(135deg, #FF6B35, #F7931E); 
            box-shadow: 0 15px 35px rgba(255, 107, 53, 0.4);
        }

        /* Team Members Section */
        .team-members {
            background: linear-gradient(135deg, var(--off-white), rgba(255, 153, 51, 0.03));
            padding: 6rem 0;
            position: relative;
            overflow: hidden;
        }

        .team-members::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><path fill="%23FF9933" opacity="0.02" d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"/><polygon fill="%23FFD700" opacity="0.03" points="600,50 650,150 750,150 675,225 700,325 600,275 500,325 525,225 450,150 550,150"/><circle fill="%23800000" opacity="0.02" cx="200" cy="150" r="80"/><circle fill="%23FFD700" opacity="0.03" cx="1000" cy="600" r="120"/></svg>') no-repeat center center;
            background-size: cover;
            animation: parallaxMove 25s ease-in-out infinite alternate;
        }

        .team-header {
            text-align: center;
            margin-bottom: 5rem;
            position: relative;
            z-index: 2;
        }

        .team-section-title {
            font-size: 3.5rem;
            color: var(--maroon);
            margin-bottom: 1rem;
            position: relative;
            background: linear-gradient(135deg, var(--maroon), var(--saffron));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textGlow 4s ease-in-out infinite alternate;
        }

        .team-section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 5px;
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            border-radius: 3px;
            animation: underlineGlow 3s ease-in-out infinite alternate;
        }

        .team-subtitle {
            font-size: 1.4rem;
            color: var(--light-text);
            font-weight: 300;
            margin-bottom: 1rem;
        }

        .team-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
            gap: 2.5rem;
            margin-bottom: 4rem;
            position: relative;
            z-index: 2;
        }

        .team-member-card {
            background: linear-gradient(135deg, var(--white), rgba(255, 215, 0, 0.06));
            padding: 2rem 2rem 1rem 2rem;
            border-radius: 25px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(255, 153, 51, 0.08);
            min-height: 520px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .team-member-card.backend::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="%23FF9933" opacity="0.03"><circle cx="25" cy="25" r="1"/><circle cx="50" cy="40" r="0.8"/><circle cx="75" cy="30" r="1"/><rect x="40" y="100" width="10" height="8" rx="1"/><rect x="60" y="90" width="12" height="10" rx="1.5"/></g></svg>') repeat;
            opacity: 0.4;
            animation: subtleMove 20s ease-in-out infinite alternate;
        }

        .team-member-card.frontend::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="%23FF9933" opacity="0.03"><polygon points="25,25 35,15 45,25 35,35" transform="rotate(45 35 25)"/><circle cx="50" cy="100" r="8" fill="none" stroke="%23FFD700" stroke-width="1" opacity="0.2"/><circle cx="100" cy="90" r="10" fill="none" stroke="%23FF9933" stroke-width="0.8" opacity="0.15"/></g></svg>') repeat;
            opacity: 0.4;
            animation: subtleMove 25s ease-in-out infinite alternate;
        }

        @keyframes subtleMove {
            0% { transform: translateX(0) translateY(0); }
            100% { transform: translateX(5px) translateY(-3px); }
        }

        .team-member-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: var(--golden);
            box-shadow: 0 20px 50px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 153, 51, 0.2);
        }

        .team-member-card:hover::after {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(45deg, var(--golden), var(--saffron), var(--golden));
            border-radius: 28px;
            z-index: -1;
            opacity: 0.6;
            animation: glowPulse 2s ease-in-out infinite alternate;
        }

        @keyframes glowPulse {
            0% { opacity: 0.4; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.01); }
        }

        .member-photo-wrapper {
            position: relative;
            margin-bottom: 1.2rem;
            display: inline-block;
            flex-shrink: 0;
        }

        .member-photo {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--white);
            position: relative;
            box-shadow: 0 12px 35px rgba(255, 153, 51, 0.25);
            border: 4px solid rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            animation: float 12s ease-in-out infinite;
        }

        .member-photo:hover {
            transform: scale(1.05) rotate(3deg);
            box-shadow: 0 15px 45px rgba(255, 153, 51, 0.35);
        }

        .member-photo-glow {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--saffron), var(--golden), var(--saffron));
            z-index: -1;
            animation: rotate 10s linear infinite;
            opacity: 0.7;
        }

        .member-role-badge {
            position: absolute;
            top: -15px;
            right: -15px;
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            color: var(--white);
            padding: 0.8rem 1.2rem;
            border-radius: 25px;
            font-weight: 700;
            font-size: 0.9rem;
            box-shadow: 0 8px 25px rgba(128, 0, 0, 0.4);
            animation: bounce 3s ease-in-out infinite;
        }

        .member-info {
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .member-name {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--golden), var(--saffron));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textGlow 4s ease-in-out infinite alternate;
        }

        .member-role {
            color: var(--maroon);
            font-weight: 700;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .member-bio {
            color: var(--dark-text);
            line-height: 1.5;
            font-size: 0.95rem;
            margin-bottom: 1rem;
            background: rgba(255, 153, 51, 0.08);
            padding: 0.8rem;
            border-radius: 12px;
            border-left: 3px solid var(--saffron);
            font-weight: 400;
            flex-shrink: 0;
        }

        .member-stats-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 0.6rem;
            margin-bottom: 1rem;
            flex-shrink: 0;
        }

        .member-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            background: rgba(255, 215, 0, 0.08);
            padding: 0.8rem;
            border-radius: 10px;
            transition: all 0.2s ease;
            border: 1px solid transparent;
        }

        .member-stat:hover {
            transform: translateY(-2px);
            background: rgba(255, 153, 51, 0.12);
            border-color: var(--saffron);
            box-shadow: 0 5px 15px rgba(255, 153, 51, 0.15);
        }

        .stat-icon {
            font-size: 1.5rem;
            filter: drop-shadow(0 0 5px rgba(255, 153, 51, 0.4));
        }

        .stat-text {
            font-weight: 600;
            color: var(--maroon);
            text-align: center;
            font-size: 0.8rem;
            line-height: 1.2;
        }

        .member-social {
            display: flex;
            justify-content: center;
            gap: 1rem;
            position: relative;
            z-index: 2;
            margin-top: auto;
            padding: 1rem 0 0.5rem 0;
            flex-shrink: 0;
            border-top: 1px solid rgba(255, 153, 51, 0.1);
        }

        .member-social-icon {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 153, 51, 0.3);
            position: relative;
            overflow: hidden;
        }

        .member-social-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.4s ease;
        }

        .member-social-icon:hover::before {
            left: 100%;
        }

        .member-social-icon:hover {
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            transform: translateY(-4px) scale(1.1);
            box-shadow: 0 8px 25px rgba(128, 0, 0, 0.4);
        }

        .member-social-icon.instagram:hover { background: linear-gradient(135deg, #E4405F, #C13584); }
        .member-social-icon.linkedin:hover { background: linear-gradient(135deg, #0077B5, #00A0DC); }
        .member-social-icon.github:hover { background: linear-gradient(135deg, #333, #555); }
        .member-social-icon.dribbble:hover { background: linear-gradient(135deg, #EA4C89, #F082AC); }
        .member-social-icon.facebook:hover { background: linear-gradient(135deg, #1877F2, #42A5F5); }

        .team-motto {
            text-align: center;
            background: linear-gradient(135deg, var(--saffron), var(--maroon));
            color: var(--white);
            padding: 3rem;
            border-radius: 25px;
            position: relative;
            overflow: hidden;
        }

        .team-motto::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path fill="%23FAF9F6" opacity="0.1" d="M0,200 Q300,100 600,200 T1200,200 V400 H0 Z"/><circle fill="%23FFD700" opacity="0.15" cx="200" cy="100" r="50"/><circle fill="%23FAF9F6" opacity="0.08" cx="1000" cy="300" r="80"/></svg>') no-repeat center center;
            background-size: cover;
        }

        .team-motto h3 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            position: relative;
            z-index: 2;
        }

        .team-motto p {
            font-size: 1.3rem;
            line-height: 1.8;
            position: relative;
            z-index: 2;
            font-weight: 300;
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, var(--off-white), rgba(255, 153, 51, 0.05));
        }

        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .contact-form {
            background: var(--white);
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-group {
            margin-bottom: 2rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--maroon);
            font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid rgba(255, 153, 51, 0.2);
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
            background: var(--off-white);
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--saffron);
        }

        .contact-info {
            padding: 2rem 0;
        }

        .contact-info h3 {
            color: var(--maroon);
            margin-bottom: 2rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background: var(--white);
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .contact-item i {
            color: var(--saffron);
            font-size: 1.5rem;
            margin-right: 1rem;
            width: 30px;
        }

        /* WhatsApp Button */
        .whatsapp-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            z-index: 999;
            animation: pulse 2s infinite;
        }

        .whatsapp-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        /* Share Button */
        .share-btn {
            position: fixed;
            bottom: 160px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 153, 51, 0.4);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            border: 2px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        }

        .share-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(255, 153, 51, 0.6), 0 0 20px rgba(255, 215, 0, 0.4);
            animation: shareBounce 0.6s ease-in-out;
        }

        @keyframes shareBounce {
            0%, 100% { transform: scale(1.1); }
            50% { transform: scale(1.15); }
        }

        /* Share Modal */
        .share-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1002;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(8px);
        }

        .share-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .share-modal-content {
            background: linear-gradient(135deg, var(--white), rgba(255, 215, 0, 0.05));
            padding: 2.5rem;
            border-radius: 25px;
            text-align: center;
            max-width: 450px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(255, 153, 51, 0.3);
            border: 2px solid var(--golden);
            transform: scale(0.8) translateY(20px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .share-modal.active .share-modal-content {
            transform: scale(1) translateY(0);
        }

        .share-modal h3 {
            color: var(--maroon);
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
        }

        .share-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .share-option {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1.2rem 0.8rem;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            background: rgba(255, 153, 51, 0.05);
        }

        .share-option:hover {
            transform: translateY(-5px) scale(1.05);
            border-color: var(--saffron);
            box-shadow: 0 8px 25px rgba(255, 153, 51, 0.2);
        }

        .share-option-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .share-option.whatsapp .share-option-icon { background: linear-gradient(135deg, #25D366, #128C7E); }
        .share-option.instagram .share-option-icon { background: linear-gradient(135deg, #E4405F, #C13584); }
        .share-option.facebook .share-option-icon { background: linear-gradient(135deg, #1877F2, #42A5F5); }
        .share-option.twitter .share-option-icon { background: linear-gradient(135deg, #1DA1F2, #0D8BD9); }
        .share-option.linkedin .share-option-icon { background: linear-gradient(135deg, #0077B5, #00A0DC); }
        .share-option.copy .share-option-icon { background: linear-gradient(135deg, var(--saffron), var(--golden)); }

        .share-option-text {
            font-weight: 600;
            color: var(--dark-text);
            font-size: 0.9rem;
        }

        .share-close-btn {
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            color: white;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .share-close-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(128, 0, 0, 0.4);
        }

        /* Floating Chatbot */
        .chatbot-btn {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(255, 153, 51, 0.4);
            transition: all 0.3s ease;
            z-index: 999;
            cursor: pointer;
            border: 2px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        }

        .chatbot-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(255, 153, 51, 0.6), 0 0 15px rgba(255, 215, 0, 0.3);
        }

        /* Chatbot Window */
        .chatbot-window {
            position: fixed;
            bottom: 160px;
            right: 20px;
            width: 350px;
            height: 500px;
            background: linear-gradient(135deg, var(--white), rgba(255, 215, 0, 0.03));
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(255, 153, 51, 0.3);
            border: 2px solid var(--golden);
            z-index: 1001;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.9);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        }

        .chatbot-window.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        .chatbot-header {
            background: linear-gradient(135deg, var(--saffron), var(--maroon));
            color: white;
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .chatbot-header-info {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .chatbot-avatar {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .chatbot-info h4 {
            margin: 0;
            font-size: 1.1rem;
        }

        .chatbot-info p {
            margin: 0;
            font-size: 0.8rem;
            opacity: 0.9;
        }

        .chatbot-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.2rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .chatbot-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }

        .chatbot-messages {
            height: 320px;
            overflow-y: auto;
            padding: 1rem;
            background: var(--off-white);
        }

        .chatbot-message {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.8rem;
        }

        .chatbot-message.user {
            flex-direction: row-reverse;
        }

        .message-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            flex-shrink: 0;
        }

        .message-avatar.bot {
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            color: white;
        }

        .message-avatar.user {
            background: linear-gradient(135deg, var(--maroon), #A0002A);
            color: white;
        }

        .message-content {
            background: white;
            padding: 0.8rem 1rem;
            border-radius: 15px;
            max-width: 70%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 153, 51, 0.1);
        }

        .chatbot-message.user .message-content {
            background: linear-gradient(135deg, var(--saffron), var(--golden));
            color: white;
        }

        .quick-replies {
            padding: 1rem;
            background: white;
            border-top: 1px solid rgba(255, 153, 51, 0.1);
        }

        .quick-reply-btn {
            display: block;
            width: 100%;
            background: rgba(255, 153, 51, 0.1);
            border: 1px solid var(--saffron);
            color: var(--maroon);
            padding: 0.8rem 1rem;
            border-radius: 10px;
            margin-bottom: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            text-align: left;
        }

        .quick-reply-btn:hover {
            background: var(--saffron);
            color: white;
            transform: translateX(5px);
        }

        .quick-reply-btn:last-child {
            margin-bottom: 0;
        }



        /* Footer */
        .footer {
            background: var(--maroon);
            color: var(--white);
            text-align: center;
            padding: 3rem 0;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .newsletter-signup {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
        }

        .newsletter-form {
            display: flex;
            gap: 1rem;
            max-width: 400px;
            margin: 1rem auto 0;
        }

        .newsletter-form input {
            flex: 1;
            padding: 0.8rem;
            border: none;
            border-radius: 25px;
            background: var(--white);
            color: var(--dark-text);
        }

        .newsletter-form button {
            padding: 0.8rem 1.5rem;
            background: var(--golden);
            color: var(--maroon);
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .newsletter-form button:hover {
            background: #FFC107;
            transform: scale(1.05);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
        }

        .social-link {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: var(--saffron);
            transform: translateY(-3px);
        }

        .footer-text {
            color: var(--golden);
            transition: all 0.3s ease;
        }

        .footer-text:hover {
            transform: scale(1.02);
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .floating {
            animation: float 3s ease-in-out infinite;
        }

        /* Mobile Navigation Styles */
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }

            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: linear-gradient(135deg, var(--maroon), var(--saffron));
                flex-direction: column;
                padding: 2rem 1rem;
                box-shadow: 0 8px 32px rgba(128, 0, 0, 0.4);
                backdrop-filter: blur(20px);
                border-radius: 0 0 20px 20px;
                gap: 1rem;
                transform: translateY(-20px);
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .nav-menu.active {
                display: flex;
                transform: translateY(0);
                opacity: 1;
                animation: slideDown 0.4s ease-out;
            }

            @keyframes slideDown {
                0% {
                    transform: translateY(-20px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .nav-menu a {
                width: 100%;
                justify-content: center;
                padding: 1rem 1.5rem;
                margin: 0.2rem 0;
                font-size: 1.1rem;
                background: rgba(255, 255, 255, 0.15);
                border: 2px solid rgba(255, 255, 255, 0.2);
            }

            .nav-menu a:hover {
                background: rgba(255, 215, 0, 0.3);
                transform: scale(1.02);
            }

            .try-demo-btn {
                margin-top: 1rem !important;
                padding: 1.2rem 2rem !important;
                font-size: 1.2rem !important;
            }

            .dropdown-content {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                margin-top: 1rem;
                min-width: auto;
                background: rgba(255, 153, 51, 0.98);
                box-shadow: 0 8px 25px rgba(255, 153, 51, 0.5);
            }

            .dropdown-item {
                padding: 1.2rem 1.5rem;
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .section-title {
                font-size: 2rem;
            }

            .contact-container {
                grid-template-columns: 1fr;
            }

            .founder-content {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
            }

            .founder-name {
                font-size: 2.5rem;
            }

            .founder-photo-main {
                width: 220px;
                height: 220px;
                font-size: 3rem;
            }

            .fun-facts-row {
                grid-template-columns: 1fr;
            }

            .founder-social {
                justify-content: center;
            }

            .founder-social-icon {
                padding: 0.8rem 1.2rem;
                font-size: 0.9rem;
            }

            .team-section-title {
                font-size: 2.2rem;
            }

            .team-cards-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .team-member-card {
                padding: 1.5rem 1.5rem 1.2rem 1.5rem;
                max-height: none;
                min-height: 500px;
            }

            .member-photo {
                width: 140px;
                height: 140px;
                font-size: 2.5rem;
            }

            .member-name {
                font-size: 1.8rem;
            }

            .member-role {
                font-size: 1rem;
            }

            .member-bio {
                font-size: 0.95rem;
            }

            .member-stats-row {
                grid-template-columns: 1fr;
                gap: 0.5rem;
                margin-bottom: 0.8rem;
            }

            .member-social {
                margin-top: auto;
                padding: 1rem 0 0.5rem 0;
                border-top: 1px solid rgba(255, 153, 51, 0.15);
                position: sticky;
                bottom: 0;
                background: linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent);
            }

            .team-motto h3 {
                font-size: 1.8rem;
            }

            .team-motto p {
                font-size: 1.1rem;
            }

            .testimonials-grid {
                grid-template-columns: 1fr;
            }

            .features-grid,
            .features-grid-large {
                grid-template-columns: 1fr;
            }

            .newsletter-form {
                flex-direction: column;
            }

            /* Mobile adjustments for floating widgets */
            .share-btn {
                bottom: 150px;
                right: 15px;
                width: 55px;
                height: 55px;
                font-size: 1.1rem;
            }

            .share-btn:hover {
                transform: scale(1.1);
            }

            .chatbot-btn {
                bottom: 90px;
                right: 15px;
                width: 55px;
                height: 55px;
                font-size: 1.3rem;
            }

            .whatsapp-btn {
                bottom: 20px;
                right: 15px;
                width: 55px;
                height: 55px;
                font-size: 1.3rem;
            }

            .chatbot-window {
                width: 320px;
                height: 450px;
                bottom: 150px;
                right: 15px;
            }

            .share-options {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }

            .share-modal-content {
                padding: 2rem;
                margin: 1rem;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 1rem;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .section {
                padding: 3rem 0;
            }

            .contact-form {
                padding: 2rem;
            }
        }

        /* Page Navigation */
        .page {
            display: none;
        }

        .page.active {
            display: block;
        }

        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#" class="logo" onclick="showPage('home')">DivineDarshan.AI</a>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="#" onclick="showPage('home')" class="active" id="home-nav"><span class="nav-emoji">🏠</span> Home</a></li>
                <li><a href="#" onclick="showPage('team')" class="tooltip" data-tooltip="Boss Dev – Meet the brain behind the magic 🧠✨" id="team-nav"><span class="nav-emoji">👑</span> Founder</a></li>
                <li><a href="#" onclick="showPage('contact')" id="contact-nav"><span class="nav-emoji">📞</span> Contact</a></li>
                <li class="demo-dropdown">
                    <a href="#" class="try-demo-btn tooltip" data-tooltip="Experience the magic! ✨🚀"><span class="nav-emoji">🚀</span> Try Demo</a>
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item" onclick="openAIChat()"><span class="nav-emoji">🗣</span> Live AI Chat Demo</a>
                        <a href="#" class="dropdown-item" onclick="openFestivalAlerts()"><span class="nav-emoji">📅</span> Festival Alerts Sign-Up</a>
                        <a href="#" class="dropdown-item" onclick="openARVRPreview()"><span class="nav-emoji">🕶</span> AR/VR Temple Tour</a>
                        <a href="#" class="dropdown-item" onclick="openVIPBooking()"><span class="nav-emoji">💎</span> VIP Darshan Booking</a>
                    </div>
                </li>
            </ul>
            <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Home Page -->
    <div id="home" class="page active">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Experience Bharat's Spiritual Soul with AI</h1>
                <p class="hero-subtitle">Your AI-powered spiritual guide to India's temples – multilingual, interactive, and rich in heritage.</p>
                
                <div class="language-toggle">
                    <button class="lang-btn active" onclick="changeLanguage('en')">English</button>
                    <button class="lang-btn" onclick="changeLanguage('hi')">हिंदी</button>
                    <button class="lang-btn" onclick="changeLanguage('mr')">मराठी</button>
                </div>
                
                <div class="cta-buttons">
                    <a href="#about" class="btn btn-primary">Explore Now</a>
                    <a href="#features" class="btn btn-secondary">Try Demo</a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section about">
            <div class="container">
                <h2 class="section-title">About DivineDarshan.AI</h2>
                <div class="about-content">
                    <p>DivineDarshan.AI bridges the spiritual divide using cutting-edge artificial intelligence, making India's rich temple heritage accessible to devotees worldwide. Our platform combines traditional wisdom with modern technology to create an immersive spiritual experience.</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card floating">
                        <div class="feature-icon">
                            <i class="fas fa-language"></i>
                        </div>
                        <h3>Multilingual Support</h3>
                        <p>Experience spiritual guidance in multiple Indian languages with real-time translation capabilities.</p>
                    </div>
                    <div class="feature-card floating">
                        <div class="feature-icon">
                            <i class="fas fa-microphone"></i>
                        </div>
                        <h3>Voice & Text Guide</h3>
                        <p>Interact naturally through voice commands or text queries for seamless spiritual exploration.</p>
                    </div>
                    <div class="feature-card floating">
                        <div class="feature-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <h3>Rich Cultural Insights</h3>
                        <p>Discover deep historical and cultural knowledge about India's sacred temples and traditions.</p>
                    </div>
                    <div class="feature-card floating">
                        <div class="feature-icon">
                            <i class="fas fa-robot"></i>
                        </div>
                        <h3>AI-Powered Assistance</h3>
                        <p>Get instant, intelligent responses powered by advanced AI technology and spiritual wisdom.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="section how-it-works">
            <div class="container">
                <h2 class="section-title">How It Works</h2>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Ask</h3>
                        <p>Simply ask your spiritual questions through voice or text in your preferred language. Our AI understands your queries with remarkable accuracy.</p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Learn</h3>
                        <p>Receive instant, comprehensive answers about temples, rituals, history, and spiritual practices from our vast knowledge base.</p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Experience</h3>
                        <p>Immerse yourself in deep temple knowledge, cultural insights, and spiritual wisdom that enriches your devotional journey.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="section features">
            <div class="container">
                <h2 class="section-title">Powerful Features</h2>
                <div class="features-grid-large">
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3>GPT AI Technology</h3>
                        <p>Advanced language model providing intelligent, contextual responses to your spiritual queries.</p>
                    </div>
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-volume-up"></i>
                        </div>
                        <h3>Whisper Voice Recognition</h3>
                        <p>State-of-the-art speech recognition for natural voice interactions in multiple languages.</p>
                    </div>
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h3>Google Translate API</h3>
                        <p>Seamless translation across languages, making spiritual knowledge accessible to all devotees.</p>
                    </div>
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-vr-cardboard"></i>
                        </div>
                        <h3>AR/VR Tours</h3>
                        <p>Immersive virtual temple visits and augmented reality experiences for remote darshan.</p>
                    </div>
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <h3>Festival Alerts</h3>
                        <p>Stay updated with important religious festivals, auspicious dates, and temple celebrations.</p>
                    </div>
                    <div class="feature-card-large">
                        <div class="feature-icon">
                            <i class="fas fa-hands-praying"></i>
                        </div>
                        <h3>Puja Booking</h3>
                        <p>Book and schedule pujas at your favorite temples with integrated booking system.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="section testimonials">
            <div class="container">
                <h2 class="section-title">What Devotees Say</h2>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <div class="testimonial-text">"DivineDarshan.AI helped me understand the rich history of Tirupati temple in my native language. The AI guide felt like having a personal pandit with me!"</div>
                        <div class="testimonial-author">- Priya Sharma, Mumbai</div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-text">"As someone living abroad, this platform keeps me connected to my spiritual roots. The festival alerts ensure I never miss important dates."</div>
                        <div class="testimonial-author">- Rajesh Patel, USA</div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-text">"The voice recognition works perfectly in Marathi! My grandmother can now easily get answers about temple rituals and traditions."</div>
                        <div class="testimonial-author">- Anita Kulkarni, Pune</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section" style="background: var(--golden); color: var(--maroon); text-align: center;">
            <div class="container">
                <h2 class="section-title" style="color: var(--maroon);">Ready to Begin Your Spiritual Journey?</h2>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Join thousands of devotees already experiencing the divine through DivineDarshan.AI</p>
                <div class="cta-buttons">
                    <a href="#" class="btn" style="background: var(--maroon); color: var(--white);" onclick="openAIChat()">Try Demo Now</a>
                    <a href="#" onclick="showPage('contact')" class="btn" style="background: transparent; color: var(--maroon); border: 2px solid var(--maroon);">Subscribe for Updates</a>
                </div>
            </div>
        </section>
    </div>

    <!-- Team Page -->
    <div id="team" class="page">
        <!-- Founder Highlight Section -->
        <section class="founder-highlight">
            <div class="founder-bg-overlay"></div>
            <div class="container">
                <div class="founder-content">
                    <div class="founder-photo-section">
                        <div class="founder-photo-wrapper">
                            <div class="founder-photo-main">
                                <i class="fas fa-crown"></i>
                                <div class="photo-glow"></div>
                            </div>
                            <div class="founder-badge">👑 FOUNDER</div>
                        </div>
                    </div>
                    
                    <div class="founder-info-section">
                        <div class="founder-header">
                            <h1 class="founder-name">Parag Sanjay Marathe</h1>
                            <p class="founder-title">Founder | Lead Developer | Entrepreneur</p>
                        </div>
                        
                        <div class="founder-intro">
                            <p>Bridging the gap between ancient wisdom and cutting-edge technology! 🚀 I'm on a mission to make India's spiritual heritage accessible to everyone through AI innovation. From coding at 2 AM to creating digital solutions that matter – this is where tradition meets transformation! ✨</p>
                        </div>
                        
                        <div class="fun-facts-row">
                            <div class="fun-fact">
                                <div class="fact-icon">💻</div>
                                <div class="fact-text">
                                    <strong>Full-stack Developer</strong>
                                    <span>& Tech Innovator</span>
                                </div>
                            </div>
                            <div class="fun-fact">
                                <div class="fact-icon">📚</div>
                                <div class="fact-text">
                                    <strong>BCA 2nd Year</strong>
                                    <span>Sandip University</span>
                                </div>
                            </div>
                            <div class="fun-fact">
                                <div class="fact-icon">🚀</div>
                                <div class="fact-text">
                                    <strong>Tech + Tradition</strong>
                                    <span>Digital Spiritual Guide</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="founder-achievements">
                            <p><strong>🏆 Achievements:</strong> Vice President @ Leads Community Club | Civil Defence Volunteer | National Top 10 in Vedic Mathematics | Creator of JalMitra, Rakshak Portal & JeevanDan</p>
                        </div>
                        
                        <div class="founder-social">
                            <a href="https://www.instagram.com/x_parag_x05?igsh=aW1qOG92aGE1NzY=" class="founder-social-icon instagram" target="_blank">
                                <i class="fab fa-instagram"></i>
                                <span>@x_parag_x05</span>
                            </a>
                            <a href="https://linkedin.com/in/paragm05" class="founder-social-icon linkedin" target="_blank">
                                <i class="fab fa-linkedin"></i>
                                <span>paragm05</span>
                            </a>
                            <a href="https://github.com/paragm05" class="founder-social-icon github" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>paragm05</span>
                            </a>
                            <a href="https://twitter.com/paragm05" class="founder-social-icon twitter" target="_blank">
                                <i class="fab fa-twitter"></i>
                                <span>@paragm05</span>
                            </a>
                            <a href="https://www.facebook.com/share/14FfF73sPrX/" class="founder-social-icon facebook" target="_blank">
                                <i class="fab fa-facebook"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="mailto:parag.marathe@divinedarshan.ai" class="founder-social-icon email" target="_blank">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Members Section -->
        <section class="team-members">
            <div class="container">
                <div class="team-header">
                    <h2 class="team-section-title">🔥 Meet the Legends Behind the Code</h2>
                    <p class="team-subtitle">The power squad turning spiritual visions into digital reality! 💻✨</p>
                </div>
                
                <div class="team-cards-grid">
                    <!-- Team Member 1 - Shubham -->
                    <div class="team-member-card backend">
                        <div class="member-photo-wrapper">
                            <div class="member-photo">
                                <i class="fas fa-server"></i>
                                <div class="member-photo-glow"></div>
                            </div>
                            <div class="member-role-badge">💻 BACKEND</div>
                        </div>
                        
                        <div class="member-info">
                            <h3 class="member-name">Shubham Gotpagar</h3>
                            <p class="member-role">Backend Master | Database Wizard</p>
                            <p class="member-bio">The brain behind the scenes — making DivineDarshan.AI run smooth and fast ⚡. Can debug in his sleep 😴💻 and has a secret love for chai while coding ☕.</p>
                            
                            <div class="member-stats-row">
                                <div class="member-stat">
                                    <div class="stat-icon">💾</div>
                                    <div class="stat-text">100% Database Ninja</div>
                                </div>
                                <div class="member-stat">
                                    <div class="stat-icon">🛠</div>
                                    <div class="stat-text">BCA 2nd Year<br>Sandip University</div>
                                </div>
                                <div class="member-stat">
                                    <div class="stat-icon">🐞</div>
                                    <div class="stat-text">Bug Killer Extraordinaire</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="member-social">
                            <a href="https://www.instagram.com/x_parag_x05?igsh=aW1qOG92aGE1NzY=" class="member-social-icon instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/shubham-gotpagar" class="member-social-icon linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://github.com/shubhamgotpagar" class="member-social-icon github" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="https://www.facebook.com/share/14FfF73sPrX/" class="member-social-icon facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>

                    <!-- Team Member 2 - Vaibhav -->
                    <div class="team-member-card frontend">
                        <div class="member-photo-wrapper">
                            <div class="member-photo">
                                <i class="fas fa-palette"></i>
                                <div class="member-photo-glow"></div>
                            </div>
                            <div class="member-role-badge">🎨 FRONTEND</div>
                        </div>
                        
                        <div class="member-info">
                            <h3 class="member-name">Vaibhav Thite</h3>
                            <p class="member-role">Frontend Magician | Idea Pitcher</p>
                            <p class="member-bio">Turns code into magic ✨ and ideas into experiences 🎨. The creative spark of DivineDarshan.AI who makes everything look as good as it works.</p>
                            
                            <div class="member-stats-row">
                                <div class="member-stat">
                                    <div class="stat-icon">🎯</div>
                                    <div class="stat-text">Pixel Perfectionist</div>
                                </div>
                                <div class="member-stat">
                                    <div class="stat-icon">🎨</div>
                                    <div class="stat-text">UI/UX Visionary</div>
                                </div>
                                <div class="member-stat">
                                    <div class="stat-icon">🚀</div>
                                    <div class="stat-text">Idea Machine</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="member-social">
                            <a href="https://www.instagram.com/x_parag_x05?igsh=aW1qOG92aGE1NzY=" class="member-social-icon instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/vaibhav-thite" class="member-social-icon linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://dribbble.com/vaibhavthite" class="member-social-icon dribbble" target="_blank"><i class="fab fa-dribbble"></i></a>
                            <a href="https://www.facebook.com/share/14FfF73sPrX/" class="member-social-icon facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="team-motto">
                    <h3>👑 The Dream Team Philosophy</h3>
                    <p>"We're not just building an app – we're creating a bridge between ancient wisdom and modern innovation. Every line of code, every design element, every feature is crafted with love, dedication, and a vision to make spirituality accessible to everyone! 🙏✨"</p>
                </div>
            </div>
        </section>
    </div>

    <!-- Contact Page -->
    <div id="contact" class="page">
        <section class="contact">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <div class="contact-container">
                    <div class="contact-form">
                        <h3 style="color: var(--maroon); margin-bottom: 2rem;">Send us a Message</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                        </form>
                    </div>
                    <div class="contact-info">
                        <h3>Contact Information</h3>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <strong>Email</strong><br>
                                divinedarshan.ai@gmail.com
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <strong>Phone</strong><br>
                                +91 9975803340
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Address</strong><br>
                                Sandip University, Nashik, Maharashtra, India
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-users"></i>
                            <div>
                                <strong>Team</strong><br>
                                Leads Community Club<br>
                                Innovation & Technology Division
                            </div>
                        </div>
                        
                        <h4 style="color: var(--maroon); margin: 2rem 0 1rem;">Connect With Us</h4>
                        <div class="social-links">
                            <a href="https://www.instagram.com/x_parag_x05?igsh=aW1qOG92aGE1NzY=" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/paragm05" class="social-link" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://github.com/paragm05" class="social-link" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="https://twitter.com/paragm05" class="social-link" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/share/14FfF73sPrX/" class="social-link" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="mailto:parag.marathe@divinedarshan.ai" class="social-link" target="_blank"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Share Button -->
    <div class="share-btn" onclick="openShareModal()">
        <i class="fas fa-external-link-alt"></i>
    </div>

    <!-- Share Modal -->
    <div class="share-modal" id="shareModal">
        <div class="share-modal-content">
            <h3>🚀 Share DivineDarshan.AI</h3>
            <p style="color: var(--light-text); margin-bottom: 2rem;">Spread the divine experience with your friends and family!</p>
            
            <div class="share-options">
                <div class="share-option whatsapp" onclick="shareOn('whatsapp')">
                    <div class="share-option-icon">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                    <div class="share-option-text">WhatsApp</div>
                </div>
                
                <div class="share-option instagram" onclick="shareOn('instagram')">
                    <div class="share-option-icon">
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div class="share-option-text">Instagram</div>
                </div>
                
                <div class="share-option facebook" onclick="shareOn('facebook')">
                    <div class="share-option-icon">
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div class="share-option-text">Facebook</div>
                </div>
                
                <div class="share-option twitter" onclick="shareOn('twitter')">
                    <div class="share-option-icon">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="share-option-text">X (Twitter)</div>
                </div>
                
                <div class="share-option linkedin" onclick="shareOn('linkedin')">
                    <div class="share-option-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="share-option-text">LinkedIn</div>
                </div>
                
                <div class="share-option copy" onclick="shareOn('copy')">
                    <div class="share-option-icon">
                        <i class="fas fa-copy"></i>
                    </div>
                    <div class="share-option-text">Copy Link</div>
                </div>
            </div>
            
            <button class="share-close-btn" onclick="closeShareModal()">Close</button>
        </div>
    </div>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/919975803340" class="whatsapp-btn" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Floating Chatbot -->
    <div class="chatbot-btn" onclick="toggleChatbot()">
        <i class="fas fa-robot"></i>
    </div>

    <!-- Chatbot Window -->
    <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
            <div class="chatbot-header-info">
                <div class="chatbot-avatar">🤖</div>
                <div class="chatbot-info">
                    <h4>Divine Assistant</h4>
                    <p>Online • Ready to help!</p>
                </div>
            </div>
            <button class="chatbot-close" onclick="closeChatbot()">×</button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="chatbot-message">
                <div class="message-avatar bot">🤖</div>
                <div class="message-content">
                    <p>🙏 Namaste! I'm your Divine Assistant. How can I help you explore DivineDarshan.AI today?</p>
                </div>
            </div>
        </div>
        
        <div class="quick-replies">
            <button class="quick-reply-btn" onclick="handleQuickReply('vip')">💎 Book VIP Darshan</button>
            <button class="quick-reply-btn" onclick="handleQuickReply('temple')">🛕 Temple Information</button>
            <button class="quick-reply-btn" onclick="handleQuickReply('contact')">📞 Contact Founder</button>
        </div>
    </div>



    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="newsletter-signup">
                <h3>Stay Connected with Divine Updates</h3>
                <p>Get the latest temple insights, festival alerts, and spiritual guidance delivered to your inbox</p>
                <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            
            <div class="logo" style="color: var(--white); font-size: 2rem; margin-bottom: 1rem;">DivineDarshan.AI</div>
            <p>Bridging spirituality and technology for a connected world</p>
            
            <div class="social-links">
                <a href="https://www.instagram.com/x_parag_x05?igsh=aW1qOG92aGE1NzY=" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/paragm05" class="social-link" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/paragm05" class="social-link" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/paragm05" class="social-link" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/share/14FfF73sPrX/" class="social-link" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="mailto:parag.marathe@divinedarshan.ai" class="social-link" target="_blank"><i class="fas fa-envelope"></i></a>
            </div>
            
            <p class="footer-text">&copy; 2024 DivineDarshan.AI | Made with ❤️, ☕, and 🚀 dreams by Parag Sanjay Marathe & Team</p>
        </div>
    </footer>

    <script>
        // Navigation functionality
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update active nav item
            updateActiveNav(pageId + '-nav');
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
            document.getElementById('mobile-menu-toggle').classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Scroll to section functionality
        function scrollToSection(sectionId) {
            // Make sure we're on the home page
            showPage('home');
            
            // Wait a bit for page transition, then scroll
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
            
            // Close mobile menu
            document.getElementById('nav-menu').classList.remove('active');
            document.getElementById('mobile-menu-toggle').classList.remove('active');
        }

        // Update active navigation item
        function updateActiveNav(activeId) {
            // Remove active class from all nav items
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current item
            const activeItem = document.getElementById(activeId);
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }

        // Language toggle functionality
        function changeLanguage(lang) {
            // Remove active class from all language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to selected language
            event.target.classList.add('active');
            
            // Here you would implement actual language change logic
            console.log('Language changed to:', lang);
        }

        // Share Modal Functions
        function openShareModal() {
            document.getElementById('shareModal').classList.add('active');
        }

        function closeShareModal() {
            document.getElementById('shareModal').classList.remove('active');
        }

        function shareOn(platform) {
            const currentUrl = window.location.href;
            const title = 'DivineDarshan.AI - Experience Bharat\'s Spiritual Soul with AI';
            const description = 'Discover India\'s sacred temples with AI-powered guidance. Multilingual support, virtual tours, and spiritual wisdom at your fingertips!';
            
            let shareUrl = '';
            let shareText = `${title}\n\n${description}\n\n🔗 ${currentUrl}`;
            
            switch(platform) {
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                    break;
                case 'instagram':
                    // Copy to clipboard for Instagram
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(shareText).then(() => {
                            alert('🎉 Link copied! You can now paste it in your Instagram story or post!');
                        }).catch(() => {
                            // Fallback for older browsers
                            const textArea = document.createElement('textarea');
                            textArea.value = shareText;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert('🎉 Link copied! You can now paste it in your Instagram story or post!');
                        });
                    }
                    closeShareModal();
                    return;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
                    break;
                case 'twitter':
                    const twitterText = `${title}\n\n${description}\n\n#DivineDarshan #AI #Spirituality #India #Temples`;
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(currentUrl)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
                    break;
                case 'copy':
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(currentUrl).then(() => {
                            alert('🎉 Link copied to clipboard!');
                        }).catch(() => {
                            // Fallback for older browsers
                            const textArea = document.createElement('textarea');
                            textArea.value = currentUrl;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert('🎉 Link copied to clipboard!');
                        });
                    }
                    closeShareModal();
                    return;
            }
            
            if (shareUrl) {
                // Try to use native Web Share API first (mobile devices)
                if (navigator.share && platform !== 'copy') {
                    navigator.share({
                        title: title,
                        text: description,
                        url: currentUrl
                    }).then(() => {
                        console.log('Shared successfully');
                        closeShareModal();
                    }).catch((error) => {
                        // Fallback to opening URL
                        window.open(shareUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
                        closeShareModal();
                    });
                } else {
                    // Open share URL in new window
                    window.open(shareUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
                    closeShareModal();
                }
            }
        }

        // Chatbot Functions
        function toggleChatbot() {
            const chatbotWindow = document.getElementById('chatbotWindow');
            chatbotWindow.classList.toggle('active');
        }

        function closeChatbot() {
            document.getElementById('chatbotWindow').classList.remove('active');
        }

        function handleQuickReply(type) {
            const messagesContainer = document.getElementById('chatbotMessages');
            
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'chatbot-message user';
            
            let userText = '';
            let botResponse = '';
            
            switch(type) {
                case 'vip':
                    userText = '💎 Book VIP Darshan';
                    botResponse = `🛕 VIP Darshan Booking\n\n✨ Choose Your Experience:\n\n🆓 Free Darshan - Standard queue access\n💎 VIP Darshan (₹299-₹999) - Priority access + Personal AI guide\n\n🎫 Features:\n• Skip long queues\n• Exclusive temple insights\n• Personal spiritual guidance\n• QR code confirmation\n\n💳 Payment: UPI, Cards, Paytm, GPay\n\n🚀 Full booking system launching soon!`;
                    break;
                case 'temple':
                    userText = '🛕 Temple Information';
                    botResponse = `🛕 Temple Information Hub\n\n📚 What I can help you with:\n\n🏛️ Temple History & Architecture\n🎭 Rituals & Ceremonies\n📅 Festival Dates & Celebrations\n🗺️ Temple Locations & Timings\n🙏 Spiritual Significance\n\n🌍 Available in multiple languages:\n• English • हिंदी • मराठी • தமிழ் • తెలుగు\n\n✨ Ask me anything about India's sacred temples!`;
                    break;
                case 'contact':
                    userText = '📞 Contact Founder';
                    botResponse = `👑 Connect with Parag Marathe\n\n📧 Email: parag.marathe@divinedarshan.ai\n📱 Phone: +91 9975803340\n\n🌐 Social Media:\n• Instagram: @x_parag_x05\n• LinkedIn: paragm05\n• GitHub: paragm05\n\n🏢 Address:\nSandip University, Nashik\nMaharashtra, India\n\n💬 WhatsApp for instant support!`;
                    break;
            }
            
            userMessage.innerHTML = `
                <div class="message-avatar user">👤</div>
                <div class="message-content">
                    <p>${userText}</p>
                </div>
            `;
            
            messagesContainer.appendChild(userMessage);
            
            // Add bot response after a delay
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'chatbot-message';
                botMessage.innerHTML = `
                    <div class="message-avatar bot">🤖</div>
                    <div class="message-content">
                        <p style="white-space: pre-line;">${botResponse}</p>
                    </div>
                `;
                messagesContainer.appendChild(botMessage);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
            
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Demo dropdown functions
        function openAIChat() {
            // Open chatbot instead of alert
            document.getElementById('chatbotWindow').classList.add('active');
        }

        function openFestivalAlerts() {
            const name = prompt("🎉 Festival Alerts Sign-Up\n\nEnter your name:");
            if (name) {
                const contact = prompt("📱 How would you like to receive alerts?\n\n1. Email\n2. WhatsApp\n\nEnter your email or WhatsApp number:");
                if (contact) {
                    alert(`🙏 Thank you ${name}!\n\nYou'll receive festival alerts and spiritual updates at: ${contact}\n\n✨ Stay connected with divine celebrations!`);
                }
            }
        }

        function openARVRPreview() {
            alert(`🕶️ AR/VR Temple Tour Preview\n\n🛕 Experience:\n• Virtual darshan of famous temples\n• 360° immersive temple tours\n• AR-guided temple navigation\n• Interactive spiritual experiences\n\n🚀 Coming Soon!\n\nGet ready for the most immersive spiritual journey from the comfort of your home!`);
        }

        function openVIPBooking() {
            alert(`💎 VIP Darshan Booking System\n\n🛕 Choose Your Experience:\n\n🆓 Free Darshan\n• Standard queue access\n• Basic temple information\n• Free spiritual guidance\n\n💎 VIP Darshan (₹299-₹999)\n• Priority queue access\n• Personal AI guide\n• Exclusive temple insights\n• Premium support\n\n💳 Payment Options:\n• UPI • Cards • Paytm • Google Pay\n\n🎫 Get QR code confirmation!\n\n🚀 Full booking system coming soon!`);
        }

        // Newsletter subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            alert(`🙏 Thank you for subscribing!\n\nYou'll receive divine updates at: ${email}\n\n✨ Stay blessed!`);
            event.target.reset();
        }

        // Mobile menu toggle with enhanced animation
        document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            const toggleBtn = this;
            
            navMenu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple form validation
            if (name && email && message) {
                // Simulate form submission
                alert('🙏 Thank you for your message! We will get back to you soon.\n\n✨ May divine blessings be with you!');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Add floating animation to feature cards
        document.querySelectorAll('.floating').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });

        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            // Close share modal when clicking outside
            const shareModal = document.getElementById('shareModal');
            const shareModalContent = shareModal.querySelector('.share-modal-content');
            if (shareModal.classList.contains('active') && !shareModalContent.contains(event.target)) {
                closeShareModal();
            }
            
            // Close chatbot when clicking outside
            const chatbotWindow = document.getElementById('chatbotWindow');
            const chatbotBtn = document.querySelector('.chatbot-btn');
            if (chatbotWindow.classList.contains('active') && 
                !chatbotWindow.contains(event.target) && 
                !chatbotBtn.contains(event.target)) {
                closeChatbot();
            }
        });

        // Close modals with ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeShareModal();
                closeChatbot();
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Add initial animations
            setTimeout(() => {
                document.querySelectorAll('.section').forEach(section => {
                    if (section.getBoundingClientRect().top < window.innerHeight) {
                        section.classList.add('visible');
                    }
                });
            }, 100);
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96ee68e921f9321d',t:'MTc1NTE1MzA5Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
