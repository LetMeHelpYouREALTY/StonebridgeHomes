const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

class SEOAuditor {
  constructor() {
    this.publicDir = path.join(__dirname, '../public');
    this.srcDir = path.join(__dirname, '../src');
    this.issues = [];
    this.recommendations = [];
  }

  async audit() {
    console.log('🔍 Starting comprehensive SEO audit...');

    await this.checkHTMLStructure();
    await this.checkMetaTags();
    await this.checkImages();
    await this.checkLinks();
    await this.checkPerformance();
    await this.checkAccessibility();
    await this.checkSchemaMarkup();

    this.generateReport();
  }

  async checkHTMLStructure() {
    console.log('📄 Checking HTML structure...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');

      // Check for proper heading hierarchy
      const headings = content.match(/<h([1-6])[^>]*>/g) || [];
      const headingLevels = headings.map(h => parseInt(h.match(/<h([1-6])/)[1]));

      if (headingLevels.length > 0) {
        // Check for proper h1 usage
        const h1Count = headingLevels.filter(level => level === 1).length;
        if (h1Count === 0) {
          this.issues.push(`Missing H1 tag in ${path.relative(this.publicDir, file)}`);
        } else if (h1Count > 1) {
          this.issues.push(`Multiple H1 tags (${h1Count}) in ${path.relative(this.publicDir, file)}`);
        }

        // Check heading hierarchy
        for (let i = 1; i < headingLevels.length; i++) {
          if (headingLevels[i] > headingLevels[i-1] + 1) {
            this.issues.push(`Skipped heading level in ${path.relative(this.publicDir, file)}: H${headingLevels[i-1]} followed by H${headingLevels[i]}`);
          }
        }
      }

      // Check for semantic HTML
      const semanticTags = ['<header', '<nav', '<main', '<section', '<article', '<aside', '<footer'];
      const hasSemanticTags = semanticTags.some(tag => content.includes(tag));

      if (!hasSemanticTags) {
        this.recommendations.push(`Consider using semantic HTML tags in ${path.relative(this.publicDir, file)}`);
      }

      // Check for lang attribute
      if (!content.includes('lang=')) {
        this.issues.push(`Missing lang attribute in ${path.relative(this.publicDir, file)}`);
      }
    }
  }

  async checkMetaTags() {
    console.log('🏷️  Checking meta tags...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');

      // Required meta tags
      const requiredMeta = [
        { tag: 'title', pattern: /<title[^>]*>([^<]+)<\/title>/ },
        { tag: 'description', pattern: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/ },
        { tag: 'viewport', pattern: /<meta[^>]*name=["']viewport["'][^>]*>/ },
        { tag: 'charset', pattern: /<meta[^>]*charset=["']utf-8["'][^>]*>/ }
      ];

      for (const meta of requiredMeta) {
        if (!meta.pattern.test(content)) {
          this.issues.push(`Missing ${meta.tag} meta tag in ${path.relative(this.publicDir, file)}`);
        }
      }

      // Check description length
      const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/);
      if (descMatch) {
        const descLength = descMatch[1].length;
        if (descLength < 120) {
          this.recommendations.push(`Short meta description (${descLength} chars) in ${path.relative(this.publicDir, file)} - consider 120-160 characters`);
        } else if (descLength > 160) {
          this.issues.push(`Long meta description (${descLength} chars) in ${path.relative(this.publicDir, file)} - should be under 160 characters`);
        }
      }

      // Check for Open Graph tags
      const ogTags = ['og:title', 'og:description', 'og:image', 'og:type'];
      const hasOGTags = ogTags.every(tag => content.includes(`property="${tag}"`));

      if (!hasOGTags) {
        this.recommendations.push(`Add Open Graph tags to ${path.relative(this.publicDir, file)}`);
      }
    }
  }

  async checkImages() {
    console.log('🖼️  Checking images...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');
      const imgTags = content.match(/<img[^>]*>/g) || [];

      for (const img of imgTags) {
        // Check for alt attribute
        if (!img.includes('alt=')) {
          this.issues.push(`Image missing alt attribute in ${path.relative(this.publicDir, file)}`);
        }

        // Check for loading attribute
        if (!img.includes('loading=')) {
          this.recommendations.push(`Add loading="lazy" to images in ${path.relative(this.publicDir, file)}`);
        }

        // Check for srcset or responsive images
        if (!img.includes('srcset=') && !img.includes('sizes=')) {
          this.recommendations.push(`Consider adding srcset for responsive images in ${path.relative(this.publicDir, file)}`);
        }
      }
    }
  }

  async checkLinks() {
    console.log('🔗 Checking links...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');
      const links = content.match(/<a[^>]*href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/g) || [];

      for (const link of links) {
        const hrefMatch = link.match(/href=["']([^"']+)["']/);
        const textMatch = link.match(/>([^<]+)</);

        if (hrefMatch && textMatch) {
          const href = hrefMatch[1];
          const text = textMatch[1].trim();

          // Check for descriptive anchor text
          if (text.length < 3 || text.toLowerCase().includes('click here') || text.toLowerCase().includes('read more')) {
            this.recommendations.push(`Improve anchor text "${text}" in ${path.relative(this.publicDir, file)}`);
          }

          // Check for broken internal links (basic check)
          if (href.startsWith('/') && !href.includes('#') && !href.includes('mailto:') && !href.includes('tel:')) {
            const targetFile = path.join(this.publicDir, href, 'index.html');
            if (!fs.existsSync(targetFile)) {
              this.issues.push(`Possible broken internal link: ${href} in ${path.relative(this.publicDir, file)}`);
            }
          }
        }
      }
    }
  }

  async checkPerformance() {
    console.log('⚡ Checking performance indicators...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');
      const stats = fs.statSync(file);

      // Check file size
      if (stats.size > 100000) { // 100KB
        this.recommendations.push(`Large HTML file (${(stats.size / 1024).toFixed(1)}KB): ${path.relative(this.publicDir, file)}`);
      }

      // Check for inline CSS/JS
      const inlineCSS = (content.match(/<style[^>]*>/g) || []).length;
      const inlineJS = (content.match(/<script[^>]*>/g) || []).length;

      if (inlineCSS > 3) {
        this.recommendations.push(`Multiple inline styles (${inlineCSS}) in ${path.relative(this.publicDir, file)} - consider external CSS`);
      }

      if (inlineJS > 3) {
        this.recommendations.push(`Multiple inline scripts (${inlineJS}) in ${path.relative(this.publicDir, file)} - consider external JS`);
      }

      // Check for preload/prefetch
      if (!content.includes('rel="preload"') && !content.includes('rel="prefetch"')) {
        this.recommendations.push(`Add preload/prefetch hints to ${path.relative(this.publicDir, file)}`);
      }
    }
  }

  async checkAccessibility() {
    console.log('♿ Checking accessibility...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');

      // Check for skip links
      if (!content.includes('skip') && !content.includes('main-content')) {
        this.recommendations.push(`Add skip links to ${path.relative(this.publicDir, file)}`);
      }

      // Check for ARIA labels
      const interactiveElements = content.match(/<(button|input|select|textarea)[^>]*>/g) || [];
      const hasAriaLabels = interactiveElements.some(el => el.includes('aria-label=') || el.includes('aria-labelledby='));

      if (interactiveElements.length > 0 && !hasAriaLabels) {
        this.recommendations.push(`Add ARIA labels to interactive elements in ${path.relative(this.publicDir, file)}`);
      }

      // Check for focus management
      if (!content.includes('tabindex') && interactiveElements.length > 0) {
        this.recommendations.push(`Consider focus management in ${path.relative(this.publicDir, file)}`);
      }
    }
  }

  async checkSchemaMarkup() {
    console.log('📋 Checking schema markup...');

    const htmlFiles = glob.sync(`${this.publicDir}/**/*.html`);

    for (const file of htmlFiles) {
      const content = await fs.readFile(file, 'utf8');

      // Check for JSON-LD
      if (!content.includes('application/ld+json')) {
        this.recommendations.push(`Add JSON-LD structured data to ${path.relative(this.publicDir, file)}`);
      }

      // Check for microdata
      if (!content.includes('itemscope') && !content.includes('application/ld+json')) {
        this.recommendations.push(`Add structured data (JSON-LD or microdata) to ${path.relative(this.publicDir, file)}`);
      }

      // Check for breadcrumbs
      if (!content.includes('BreadcrumbList') && !content.includes('breadcrumb')) {
        this.recommendations.push(`Add breadcrumb navigation to ${path.relative(this.publicDir, file)}`);
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.issues.length,
        totalRecommendations: this.recommendations.length,
        score: Math.max(0, 100 - (this.issues.length * 10) - (this.recommendations.length * 2))
      },
      issues: this.issues,
      recommendations: this.recommendations,
      seoScore: this.calculateSEOScore()
    };

    // Save report
    const reportPath = path.join(__dirname, '../seo-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Console output
    console.log('\n📊 SEO Audit Results:');
    console.log(`🏆 SEO Score: ${report.seoScore}/100`);
    console.log(`❌ Issues Found: ${this.issues.length}`);
    console.log(`💡 Recommendations: ${this.recommendations.length}`);

    if (this.issues.length > 0) {
      console.log('\n❌ Critical Issues:');
      this.issues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
    }

    if (this.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.recommendations.slice(0, 10).forEach((rec, index) => {
        console.log(`   ${index + 1}. ${rec}`);
      });

      if (this.recommendations.length > 10) {
        console.log(`   ... and ${this.recommendations.length - 10} more recommendations`);
      }
    }

    console.log(`\n📄 Full report saved to: ${reportPath}`);

    if (report.seoScore < 80) {
      console.log('\n⚠️  SEO Score below 80. Consider addressing issues and recommendations.');
    } else {
      console.log('\n✅ Excellent SEO score! Your site is well-optimized.');
    }
  }

  calculateSEOScore() {
    let score = 100;

    // Deduct for issues (critical)
    score -= this.issues.length * 15;

    // Deduct for recommendations (minor)
    score -= this.recommendations.length * 3;

    return Math.max(0, Math.round(score));
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SEOAuditor();
  auditor.audit().catch(console.error);
}

module.exports = SEOAuditor;

