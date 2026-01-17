export const generateProposalHTML = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ODI STUDIOS × HELLO MALLOWS - Campaign Proposal</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #FDF8F3;
      color: #5C3D2E;
      line-height: 1.6;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
    
    /* Header */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      padding: 1.5rem 0;
      background: rgba(253, 248, 243, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(212, 165, 116, 0.1);
    }
    
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .logo-icon {
      width: 40px;
      height: 40px;
      background: #5C3D2E;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4A574;
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
    }
    
    .logo-text span:first-child {
      font-weight: 500;
      font-size: 1.125rem;
      letter-spacing: 0.05em;
    }
    
    .logo-text span:last-child {
      font-size: 0.7rem;
      color: #B8845C;
      letter-spacing: 0.1em;
    }
    
    .nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .nav a {
      color: #5C3D2E;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav a:hover {
      color: #B8845C;
    }
    
    .btn {
      background: #5C3D2E;
      color: white;
      padding: 0.625rem 1.5rem;
      border-radius: 9999px;
      font-weight: 500;
      font-size: 0.875rem;
      text-decoration: none;
      transition: all 0.3s;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: none;
      cursor: pointer;
    }
    
    .btn:hover {
      background: #4A3125;
      transform: scale(1.02);
    }
    
    .btn-light {
      background: white;
      color: #5C3D2E;
    }
    
    .btn-light:hover {
      background: #FDF8F3;
    }
    
    /* Hero */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 6rem 1.5rem;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      opacity: 0.3;
    }
    
    .hero-bg-circle {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
    }
    
    .hero-bg-circle:nth-child(1) {
      top: 5rem;
      left: 2.5rem;
      width: 16rem;
      height: 16rem;
      background: #E8D4C4;
    }
    
    .hero-bg-circle:nth-child(2) {
      bottom: 5rem;
      right: 2.5rem;
      width: 24rem;
      height: 24rem;
      background: #F5E6D8;
    }
    
    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
      text-align: center;
    }
    
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: rgba(255,255,255,0.8);
      border: 1px solid rgba(212, 165, 116, 0.3);
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      color: #5C3D2E;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    
    .brand-names {
      font-size: 1.125rem;
      color: #B8845C;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
    
    .hero h1 {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 300;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    
    .hero h1 span {
      display: block;
    }
    
    .hero h1 .accent {
      font-weight: 500;
      font-style: italic;
      color: #B8845C;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(139, 99, 70, 0.8);
      max-width: 600px;
      margin: 0 auto 1rem;
      font-weight: 300;
    }
    
    .hero-date {
      font-size: 0.875rem;
      color: rgba(184, 132, 92, 0.7);
      margin-bottom: 3rem;
    }
    
    /* Sections */
    section {
      padding: 6rem 1.5rem;
    }
    
    .section-light {
      background: white;
    }
    
    .section-cream {
      background: #FDF8F3;
    }
    
    .section-dark {
      background: #5C3D2E;
      color: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-number {
      font-size: 0.875rem;
      font-weight: 500;
      color: #B8845C;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    
    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 300;
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      font-size: 1.125rem;
      color: rgba(139, 99, 70, 0.7);
      max-width: 600px;
    }
    
    /* Introduction */
    .intro-content {
      max-width: 800px;
    }
    
    .intro-text {
      font-size: 1.125rem;
      color: #6B5344;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
    
    .quote-block {
      position: relative;
      padding-left: 2rem;
      border-left: 2px solid #D4A574;
      margin: 2rem 0;
    }
    
    .quote-block p {
      font-size: 1.25rem;
      color: #5C3D2E;
      font-weight: 500;
      font-style: italic;
      line-height: 1.6;
    }
    
    /* Campaign Insight */
    .core-thought-card {
      background: white;
      border-radius: 1.5rem;
      padding: 3rem;
      box-shadow: 0 2px 20px rgba(0,0,0,0.05);
      margin-bottom: 3rem;
    }
    
    .core-thought-label {
      font-size: 0.75rem;
      color: #B8845C;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }
    
    .core-thought-text {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 300;
      line-height: 1.2;
    }
    
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .goal-card {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid rgba(232, 212, 196, 0.3);
      transition: all 0.3s;
    }
    
    .goal-card:hover {
      border-color: rgba(212, 165, 116, 0.5);
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    
    .goal-icon {
      width: 48px;
      height: 48px;
      background: #FDF8F3;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      color: #B8845C;
    }
    
    /* Why Mumbai */
    .mumbai-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }
    
    @media (max-width: 768px) {
      .mumbai-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .point-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #FDF8F3;
      border-radius: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .point-dot {
      width: 8px;
      height: 8px;
      background: #D4A574;
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .dark-card {
      background: #5C3D2E;
      border-radius: 1.5rem;
      padding: 2rem;
      color: white;
    }
    
    .dark-card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
      color: #D4A574;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    
    .benefit-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .benefit-icon {
      width: 40px;
      height: 40px;
      background: rgba(212, 165, 116, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4A574;
      flex-shrink: 0;
    }
    
    .location-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #6B5344;
    }
    
    .location-tag {
      padding: 0.5rem 1rem;
      background: #6B5344;
      color: #E8D4C4;
      border-radius: 9999px;
      font-size: 0.875rem;
    }
    
    /* Experiences */
    .experience-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }
    
    .experience-tab {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      border: 1px solid rgba(232, 212, 196, 0.5);
      background: white;
    }
    
    .experience-tab.active {
      background: #5C3D2E;
      color: white;
      border-color: #5C3D2E;
    }
    
    .experience-images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .experience-image {
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      aspect-ratio: 1;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    
    .experience-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .experience-image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      color: white;
    }
    
    .experience-image-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 0.8;
      margin-bottom: 0.25rem;
    }
    
    .experience-image-title {
      font-size: 1.25rem;
      font-weight: 500;
    }
    
    .experience-full-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    
    .card {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 2px 20px rgba(0,0,0,0.05);
    }
    
    .card-dark {
      background: #5C3D2E;
      color: white;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .card-icon {
      width: 40px;
      height: 40px;
      background: #FDF8F3;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #B8845C;
    }
    
    .card-dark .card-icon {
      background: rgba(212, 165, 116, 0.2);
      color: #D4A574;
    }
    
    .design-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: #6B5344;
    }
    
    .design-dot {
      width: 6px;
      height: 6px;
      background: #D4A574;
      border-radius: 50%;
    }
    
    .instruction-box {
      background: #6B5344;
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .instruction-text {
      font-size: 1.25rem;
      color: #E8D4C4;
      font-style: italic;
      font-weight: 300;
    }
    
    .prompt-card {
      background: #6B5344;
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1rem;
      transition: all 0.3s;
    }
    
    .prompt-card:hover {
      background: #7B6354;
      transform: scale(1.02);
    }
    
    .prompt-text {
      font-size: 1.25rem;
      color: white;
      font-style: italic;
      font-weight: 300;
    }
    
    /* Packages */
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      align-items: start;
    }
    
    .package-card {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      border: 1px solid rgba(232, 212, 196, 0.5);
      transition: all 0.3s;
      position: relative;
    }
    
    .package-card:hover {
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    
    .package-card.featured {
      background: #5C3D2E;
      color: white;
      border: none;
      transform: scale(1.05);
      box-shadow: 0 20px 60px rgba(92, 61, 46, 0.3);
    }
    
    .package-badge {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: #D4A574;
      color: white;
      padding: 0.375rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    
    .package-number {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #B8845C;
      margin-bottom: 0.5rem;
    }
    
    .package-card.featured .package-number {
      color: #D4A574;
    }
    
    .package-name {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    .package-price {
      font-size: 2.5rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
    
    .package-includes {
      margin-bottom: 2rem;
    }
    
    .package-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .package-check {
      width: 20px;
      height: 20px;
      background: #FDF8F3;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    
    .package-card.featured .package-check {
      background: rgba(212, 165, 116, 0.2);
    }
    
    .package-impact {
      background: #FDF8F3;
      border-radius: 0.75rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .package-card.featured .package-impact {
      background: #6B5344;
    }
    
    .impact-label {
      font-size: 0.75rem;
      color: #B8845C;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    
    .package-card.featured .impact-label {
      color: #D4A574;
    }
    
    .impact-text {
      font-size: 0.875rem;
      color: #5C3D2E;
    }
    
    .package-card.featured .impact-text {
      color: #E8D4C4;
    }
    
    .package-btn {
      width: 100%;
      padding: 1rem;
      border-radius: 0.75rem;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    
    /* Scope */
    .scope-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    
    @media (max-width: 768px) {
      .scope-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .scope-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 0.75rem;
      border: 1px solid rgba(232, 212, 196, 0.3);
      margin-bottom: 1rem;
      transition: all 0.3s;
    }
    
    .scope-item:hover {
      border-color: rgba(212, 165, 116, 0.5);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    
    .scope-icon {
      width: 40px;
      height: 40px;
      background: #FDF8F3;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #B8845C;
      flex-shrink: 0;
    }
    
    .deliverable-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .deliverable-icon {
      width: 40px;
      height: 40px;
      background: rgba(212, 165, 116, 0.2);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4A574;
      flex-shrink: 0;
    }
    
    /* Why ODI */
    .odi-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }
    
    @media (max-width: 768px) {
      .odi-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .odi-tagline {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 2rem;
    }
    
    .odi-philosophy {
      display: inline-block;
      background: #5C3D2E;
      border-radius: 1rem;
      padding: 1.5rem 2rem;
    }
    
    .odi-philosophy p {
      font-size: 1.25rem;
      color: white;
      font-style: italic;
      font-weight: 300;
    }
    
    .expertise-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    
    .expertise-card {
      background: #FDF8F3;
      border-radius: 1rem;
      padding: 1.5rem;
      transition: all 0.3s;
    }
    
    .expertise-card:hover {
      background: rgba(232, 212, 196, 0.5);
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    
    .expertise-icon {
      width: 48px;
      height: 48px;
      background: white;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      color: #B8845C;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    
    .expertise-text {
      font-weight: 500;
    }
    
    /* Next Steps */
    .steps-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    
    @media (max-width: 768px) {
      .steps-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .step-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: #6B5344;
      border-radius: 1rem;
      transition: all 0.3s;
    }
    
    .step-card:hover {
      background: #7B6354;
    }
    
    .step-icon {
      width: 40px;
      height: 40px;
      background: rgba(212, 165, 116, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4A574;
      flex-shrink: 0;
    }
    
    .step-number {
      font-size: 0.75rem;
      color: #D4A574;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }
    
    .step-text {
      font-weight: 500;
    }
    
    .closing-text {
      font-size: 1.25rem;
      color: #E8D4C4;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Footer */
    .footer {
      padding: 4rem 1.5rem;
      background: white;
      border-top: 1px solid rgba(232, 212, 196, 0.5);
      text-align: center;
    }
    
    .footer-icon {
      width: 64px;
      height: 64px;
      background: #5C3D2E;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: #D4A574;
    }
    
    .footer-proposed {
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 0.5rem;
    }
    
    .footer-brand {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    .footer-tagline {
      color: rgba(139, 99, 70, 0.7);
      margin-bottom: 2rem;
    }
    
    .footer-divider {
      width: 96px;
      height: 1px;
      background: rgba(212, 165, 116, 0.3);
      margin: 0 auto 2rem;
    }
    
    .footer-contact {
      font-size: 0.875rem;
      color: rgba(139, 99, 70, 0.6);
      margin-bottom: 1rem;
    }
    
    .footer-copyright {
      font-size: 0.875rem;
      color: rgba(139, 99, 70, 0.6);
    }
    
    /* SVG Icons */
    .icon {
      width: 20px;
      height: 20px;
    }
    
    .icon-sm {
      width: 16px;
      height: 16px;
    }
    
    .icon-lg {
      width: 28px;
      height: 28px;
    }
    
    /* Utility */
    .text-center {
      text-align: center;
    }
    
    .mb-4 {
      margin-bottom: 1rem;
    }
    
    .mb-8 {
      margin-bottom: 2rem;
    }
    
    .mb-16 {
      margin-bottom: 4rem;
    }
    
    @media print {
      .header {
        position: relative;
      }
      .hero {
        min-height: auto;
        padding: 4rem 1.5rem;
      }
      section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <div class="logo-icon">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <div class="logo-text">
          <span>ODI STUDIOS</span>
          <span>PROPOSAL</span>
        </div>
      </div>
      <nav class="nav">
        <a href="#experiences">Experiences</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact</a>
        <a href="#contact" class="btn">Get Started</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-bg-circle"></div>
      <div class="hero-bg-circle"></div>
    </div>
    <div class="hero-content">
      <div class="badge">
        <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Campaign Proposal
      </div>
      <div class="brand-names">ODI STUDIOS × HELLO MALLOWS</div>
      <h1>
        <span>Softness</span>
        <span class="accent">Interrupting the City</span>
      </h1>
      <p class="hero-subtitle">A Mumbai Street Installation Brand Campaign Proposal</p>
      <p class="hero-date">Prepared by ODI STUDIOS • January 2025</p>
      <a href="#introduction" class="btn">Explore the Campaign</a>
    </div>
  </section>

  <!-- Introduction -->
  <section id="introduction" class="section-light">
    <div class="container">
      <div class="intro-content">
        <div class="section-number">01</div>
        <h2 class="section-title">Introduction</h2>
        <p class="intro-text">
          Hello Mallows is not just a chocolate brand — it is an experience of softness, indulgence, and emotion. In a city like Mumbai, where everything moves fast, loud, and relentlessly, Hello Mallows has an opportunity to do something rare: slow people down on the street.
        </p>
        <div class="quote-block">
          <p>ODI STUDIOS proposes a street-led experiential brand campaign designed to interrupt Mumbai's everyday rhythm with softness, curiosity, and indulgence.</p>
        </div>
        <p class="intro-text" style="color: rgba(139, 99, 70, 0.7);">
          This will not be a pop-up or a stall — it will be a <strong style="color: #5C3D2E;">temporary street installation</strong> that people stumble upon, participate in, and talk about.
        </p>
      </div>
    </div>
  </section>

  <!-- Campaign Insight -->
  <section class="section-cream">
    <div class="container">
      <div class="section-number">02</div>
      <h2 class="section-title mb-16">Campaign Thought & Strategic Insight</h2>
      
      <div class="core-thought-card">
        <div class="core-thought-label">Core Thought</div>
        <p class="core-thought-text">"Softness interrupting the city."</p>
      </div>
      
      <div class="grid-2 mb-16">
        <div>
          <p class="intro-text">Mumbai is chaos. Hello Mallows is softness. Placing something slow, tactile, and indulgent directly on a busy Mumbai street creates instant contrast — and contrast is what attracts attention, emotion, and content.</p>
        </div>
        <div class="card">
          <p style="font-size: 1.125rem; font-style: italic; font-weight: 500; color: #5C3D2E;">"Luxury today is not about exclusivity behind doors. It is about confidence — the confidence to exist quietly in loud places."</p>
        </div>
      </div>
      
      <div class="core-thought-label">This Campaign is Designed To</div>
      <div class="grid-3">
        <div class="goal-card">
          <div class="goal-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <p style="font-weight: 500;">Feel premium without feeling distant</p>
        </div>
        <div class="goal-card">
          <div class="goal-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </div>
          <p style="font-weight: 500;">Invite curiosity instead of demanding attention</p>
        </div>
        <div class="goal-card">
          <div class="goal-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <p style="font-weight: 500;">Generate organic content through genuine human reactions</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Mumbai -->
  <section class="section-light">
    <div class="container">
      <div class="section-number">03</div>
      <h2 class="section-title mb-16">Why Mumbai Streets</h2>
      
      <div class="mumbai-grid">
        <div>
          <h3 style="font-size: 1.75rem; font-weight: 300; margin-bottom: 2rem;">Mumbai streets are cultural spaces.</h3>
          <div class="point-item"><div class="point-dot"></div><span>Conversations happen</span></div>
          <div class="point-item"><div class="point-dot"></div><span>Content is created organically</span></div>
          <div class="point-item"><div class="point-dot"></div><span>Brands become part of everyday memory</span></div>
          <p class="intro-text" style="margin-top: 2rem;">By choosing one carefully selected street in Mumbai (Bandra, Kala Ghoda, Fort, Juhu, etc.), Hello Mallows positions itself not as an advertiser — but as a cultural interruption.</p>
        </div>
        <div class="dark-card">
          <div class="dark-card-header">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            This Approach Ensures
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
            <span>High footfall</span>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
            <span>Natural curiosity-led participation</span>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></div>
            <span>Authentic social media content</span>
          </div>
          <div class="location-tags">
            <span style="font-size: 0.875rem; color: rgba(232, 212, 196, 0.6); width: 100%; margin-bottom: 0.5rem;">Potential Locations</span>
            <span class="location-tag">Bandra</span>
            <span class="location-tag">Kala Ghoda</span>
            <span class="location-tag">Fort</span>
            <span class="location-tag">Juhu</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experiences -->
  <section id="experiences" class="section-cream">
    <div class="container">
      <div class="section-number">04</div>
      <h2 class="section-title">Experience Overview</h2>
      <p class="section-subtitle mb-16">Three distinct installations designed to create memorable moments</p>
      
      <!-- Experience 1: First Bite Booth -->
      <div style="margin-bottom: 4rem;">
        <h3 style="font-size: 1.5rem; font-weight: 500; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem;">
          <span style="width: 40px; height: 40px; background: #5C3D2E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #D4A574;">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </span>
          The First Bite Booth
        </h3>
        
        <div class="experience-images">
          <div class="experience-image">
            <img src="https://customer-assets.emergentagent.com/job_c9fd466e-0ffa-4979-9ecf-4ad11ca295b4/artifacts/cks47399_%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%84%D0%BE%D1%82%D0%BE%D0%B1%D1%83%D0%B4%D0%BA%D0%B0%20ThePhotoBooth%20%D0%B4%D0%BB%D1%8F%20absolut.jpg" alt="Photo Booth Concept">
            <div class="experience-image-overlay">
              <div class="experience-image-label">Reference Visual</div>
              <div class="experience-image-title">Photo Booth Concept</div>
            </div>
          </div>
          <div class="experience-image">
            <img src="https://customer-assets.emergentagent.com/job_c9fd466e-0ffa-4979-9ecf-4ad11ca295b4/artifacts/rvqct6aa_download%20%282%29.jpg" alt="Reaction Wall Concept">
            <div class="experience-image-overlay">
              <div class="experience-image-label">Reference Visual</div>
              <div class="experience-image-title">Reaction Wall Concept</div>
            </div>
          </div>
        </div>
        
        <div class="grid-2">
          <div class="card">
            <p class="intro-text">A marshmallow- and chocolate-inspired photobooth placed directly on the street.</p>
            <div class="core-thought-label">Design Language</div>
            <div class="design-item"><div class="design-dot"></div><span>Puffy, soft, sculptural form</span></div>
            <div class="design-item"><div class="design-dot"></div><span>Rounded edges, chocolate drips</span></div>
            <div class="design-item"><div class="design-dot"></div><span>Warm lighting that glows at night</span></div>
          </div>
          <div>
            <div class="card card-dark" style="margin-bottom: 1.5rem;">
              <div class="card-header">
                <div class="card-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div>
                <span style="font-weight: 500; font-size: 1.125rem;">Inside the Booth</span>
              </div>
              <div class="instruction-box">
                <p class="instruction-text">"Take a bite. Say the first thing that comes to mind."</p>
              </div>
              <p style="color: rgba(232, 212, 196, 0.8);">Participants are filmed reacting naturally — no retakes, no scripts.</p>
            </div>
            <div class="card">
              <div class="card-header">
                <div class="card-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg></div>
                <span style="font-weight: 500; font-size: 1.125rem; color: #5C3D2E;">Outside the Booth</span>
              </div>
              <p style="color: #6B5344;">A sticky-note reaction wall integrated into the booth structure. Participants write their first thought after tasting and stick it on the wall. By the end of the day, the booth becomes a living collage of reactions.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Experience 2: The Melt Box -->
      <div style="margin-bottom: 4rem;">
        <h3 style="font-size: 1.5rem; font-weight: 500; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem;">
          <span style="width: 40px; height: 40px; background: #5C3D2E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #D4A574;">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          </span>
          The Melt Box
        </h3>
        
        <div style="position: relative; border-radius: 1.5rem; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
          <img src="https://customer-assets.emergentagent.com/job_c9fd466e-0ffa-4979-9ecf-4ad11ca295b4/artifacts/a7bgchqa_ChatGPT%20Image%20Jan%2017%2C%202026%2C%2009_16_57%20AM.png" alt="The Melt Box" style="width: 100%; height: 500px; object-fit: cover;">
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: white;">
            <div class="experience-image-label">Reference Visual</div>
            <div style="font-size: 1.5rem; font-weight: 500; margin-top: 0.5rem;">Museum-Style Melt Box Installation</div>
            <p style="opacity: 0.8; margin-top: 0.5rem;">A silent, contemplative experience featuring melting chocolate art</p>
          </div>
        </div>
        
        <div class="grid-2">
          <div class="card">
            <p class="intro-text">A small white cube placed directly on the street.</p>
            <div class="core-thought-label">Inside the Cube</div>
            <div class="design-item"><svg class="icon-sm" style="color: #D4A574; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg><span>A white plinth</span></div>
            <div class="design-item"><svg class="icon-sm" style="color: #D4A574; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg><span>A Hello Mallow slowly melting under a heat lamp</span></div>
            <p style="color: #6B5344; font-style: italic; margin-top: 1.5rem;">A silent, museum-like experience amidst street chaos.</p>
          </div>
          <div>
            <div class="card card-dark" style="margin-bottom: 1.5rem; text-align: center;">
              <div class="core-thought-label" style="color: #D4A574;">Exterior Text</div>
              <p style="font-size: 2rem; font-style: italic; font-weight: 300;">"Good things don't wait."</p>
            </div>
            <div class="card">
              <div class="card-header">
                <div class="card-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <span style="font-weight: 500; font-size: 0.875rem; color: #B8845C; letter-spacing: 0.1em; text-transform: uppercase;">The Question</span>
              </div>
              <p style="font-size: 1.25rem; font-style: italic; color: #5C3D2E; margin-bottom: 1rem;">"Would you like to taste it now?"</p>
              <p style="color: #6B5344;">They either taste immediately or walk away — creating an emotional decision moment.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Experience 3: Soft Street Journey -->
      <div>
        <h3 style="font-size: 1.5rem; font-weight: 500; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem;">
          <span style="width: 40px; height: 40px; background: #5C3D2E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #D4A574;">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </span>
          The Soft Street Journey
        </h3>
        
        <div class="grid-2">
          <div class="card">
            <p class="intro-text">As people approach the installations, the street itself becomes part of the narrative.</p>
            <div class="core-thought-label">Elements Include</div>
            <div class="design-item"><svg class="icon-sm" style="color: #D4A574; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span>Oversized marshmallow props placed subtly around the street</span></div>
            <div class="design-item"><svg class="icon-sm" style="color: #D4A574; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span>Standing boards and pavement prompts with thought-provoking questions</span></div>
            <div style="background: #FDF8F3; border-radius: 0.75rem; padding: 1rem; margin-top: 1.5rem;">
              <p style="font-weight: 500; color: #5C3D2E;">This transforms the street into a guided experience rather than a single point of interaction.</p>
            </div>
          </div>
          <div class="card card-dark">
            <div class="core-thought-label" style="color: #D4A574; margin-bottom: 2rem;">Street Prompts</div>
            <div class="prompt-card"><p class="prompt-text">"Would you wait for pleasure?"</p></div>
            <div class="prompt-card"><p class="prompt-text">"When did you last not think twice?"</p></div>
            <div class="prompt-card"><p class="prompt-text">"What melts you?"</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Packages -->
  <section id="packages" class="section-light">
    <div class="container text-center">
      <div class="section-number">05</div>
      <h2 class="section-title">Package Options & Pricing</h2>
      <p class="section-subtitle mb-16" style="margin-left: auto; margin-right: auto;">Choose the experience level that matches your vision</p>
      
      <div class="packages-grid">
        <!-- Package 1 -->
        <div class="package-card">
          <div class="package-number">Package 1</div>
          <h3 class="package-name">First Bite on the Street</h3>
          <div class="package-price">₹4.5 Lakhs</div>
          <div class="package-includes">
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">The First Bite Booth installation</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">Street prompt boards leading to the booth</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">3–4 on-ground staff</span>
            </div>
          </div>
          <div class="package-impact">
            <div class="impact-label">Impact</div>
            <p class="impact-text">High participation, strong UGC, immediate virality.</p>
          </div>
          <button class="package-btn btn">Select Package <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
        </div>
        
        <!-- Package 2 (Featured) -->
        <div class="package-card featured">
          <div class="package-badge">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            Most Popular
          </div>
          <div class="package-number">Package 2</div>
          <h3 class="package-name">When the Street Melts</h3>
          <div class="package-price">₹5.75 Lakhs</div>
          <div class="package-includes">
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #D4A574;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left; color: #E8D4C4;">Everything in Package 1</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #D4A574;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left; color: #E8D4C4;">The Melt Box street installation</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #D4A574;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left; color: #E8D4C4;">Oversized marshmallow street props</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #D4A574;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left; color: #E8D4C4;">Basic photography coverage</span>
            </div>
          </div>
          <div class="package-impact">
            <div class="impact-label">Impact</div>
            <p class="impact-text">Adds emotional depth, artistic value, and longer audience engagement.</p>
          </div>
          <button class="package-btn btn btn-light">Select Package <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
        </div>
        
        <!-- Package 3 -->
        <div class="package-card">
          <div class="package-number">Package 3</div>
          <h3 class="package-name">Mumbai, Softened</h3>
          <div class="package-price">₹7.25 Lakhs</div>
          <div class="package-includes">
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">Everything in Package 1 & 2</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">Full Soft Street Journey build-up</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">Museum-style Melt Box experience</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">PR & influencer marketing</span>
            </div>
            <div class="package-item">
              <div class="package-check"><svg class="icon-sm" style="color: #B8845C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span style="text-align: left;">Hero recap film + multiple reels</span>
            </div>
          </div>
          <div class="package-impact">
            <div class="impact-label">Impact</div>
            <p class="impact-text">A cultural moment, press-worthy execution, and flagship brand statement.</p>
          </div>
          <button class="package-btn btn">Select Package <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
        </div>
      </div>
    </div>
  </section>

  <!-- Scope & Deliverables -->
  <section class="section-cream">
    <div class="container">
      <div class="scope-grid">
        <div>
          <div class="section-number">06</div>
          <h2 class="section-title">Execution & Management Scope</h2>
          <p class="section-subtitle mb-8">ODI STUDIOS will manage the campaign end-to-end</p>
          
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div><span>Creative strategy & concept development</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg></div><span>Installation and prop design</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><span>Fabrication and setup</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span>Street permissions and local coordination</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><span>On-ground staffing and campaign management</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><span>Crowd flow and hygiene protocols</span></div>
          <div class="scope-item"><div class="scope-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><span>Photography, videography, and post-production</span></div>
        </div>
        
        <div class="dark-card" style="height: fit-content;">
          <div class="dark-card-header">
            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Content & Deliverables
          </div>
          <div class="deliverable-item"><div class="deliverable-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg></div><span>Short-form reaction reels</span></div>
          <div class="deliverable-item"><div class="deliverable-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><span>Melt Box time-lapse and cinematic shots</span></div>
          <div class="deliverable-item"><div class="deliverable-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><span>Crowd interaction visuals</span></div>
          <div class="deliverable-item"><div class="deliverable-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div><span>Hero campaign recap film (Package 3)</span></div>
          <div class="deliverable-item"><div class="deliverable-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div><span>Edited content ready for social media use</span></div>
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #6B5344;">
            <p style="font-size: 0.875rem; color: rgba(232, 212, 196, 0.6); font-style: italic;">All content will be edited and ready for social media use across all platforms.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why ODI -->
  <section class="section-light">
    <div class="container">
      <div class="section-number">07</div>
      <h2 class="section-title mb-16">Why ODI STUDIOS</h2>
      
      <div class="odi-grid">
        <div>
          <p class="odi-tagline">We create culture-first brand experiences — not just campaigns.</p>
          <div class="odi-philosophy">
            <p>"Our focus is not noise, but impact."</p>
          </div>
        </div>
        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="expertise-icon"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div>
            <p class="expertise-text">Street dynamics</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div>
            <p class="expertise-text">Human psychology</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg></div>
            <p class="expertise-text">Visual storytelling</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <p class="expertise-text">End-to-end execution</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Next Steps -->
  <section id="contact" class="section-dark text-center">
    <div class="container">
      <div class="section-number" style="color: #D4A574;">08</div>
      <h2 class="section-title mb-16" style="color: white;">Next Steps</h2>
      
      <div class="steps-grid" style="max-width: 900px; margin: 0 auto 3rem;">
        <div class="step-card">
          <div class="step-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
          <div>
            <div class="step-number">Step 1</div>
            <p class="step-text">Finalize package selection</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
          <div>
            <div class="step-number">Step 2</div>
            <p class="step-text">Lock street location</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
          <div>
            <div class="step-number">Step 3</div>
            <p class="step-text">Align on execution dates</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-icon"><svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
          <div>
            <div class="step-number">Step 4</div>
            <p class="step-text">Begin permissions and fabrication</p>
          </div>
        </div>
      </div>
      
      <p class="closing-text">We look forward to creating a moment that Mumbai remembers — and associates with Hello Mallows.</p>
      
      <a href="mailto:hello@odistudios.com" class="btn btn-light" style="padding: 1rem 2.5rem; font-size: 1.125rem;">
        Let's Begin
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-icon">
      <svg class="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    </div>
    <p class="footer-proposed">Proposed by</p>
    <p class="footer-brand">ODI STUDIOS</p>
    <p class="footer-tagline">Creating cultural moments</p>
    <div class="footer-divider"></div>
    <p class="footer-contact">For inquiries regarding this proposal, please contact ODI STUDIOS</p>
    <p class="footer-copyright">© 2025 ODI STUDIOS. All rights reserved.</p>
  </footer>
</body>
</html>`;
};
