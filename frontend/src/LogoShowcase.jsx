/**
 * Logo Showcase Page
 * Demonstrates all logo variants and usage examples
 * This page can be used as a reference for developers
 */

import React from 'react';
import Logo, { LogoIcon } from './components/Logo';
import { brandColors } from './brandConfig';

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Inter' }}>
          LawBOX Logo Showcase
        </h1>
        
        {/* Primary Logo - Light Background */}
        <section className="mb-16 bg-white rounded-lg p-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Primary Logo - Light Background</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-600 mb-4">Extra Large (300px)</p>
              <Logo size="xlarge" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">Large (240px)</p>
              <Logo size="large" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">Medium (180px) - Default</p>
              <Logo size="medium" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">Small (120px) - Minimum Digital Size</p>
              <Logo size="small" />
            </div>
          </div>
        </section>

        {/* Inverse Logo - Dark Background */}
        <section className="mb-16 bg-black rounded-lg p-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Inverse Logo - Dark Background</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-4">Extra Large (300px)</p>
              <Logo size="xlarge" variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">Large (240px)</p>
              <Logo size="large" variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">Medium (180px) - Default</p>
              <Logo size="medium" variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">Small (120px) - Minimum Digital Size</p>
              <Logo size="small" variant="inverse" />
            </div>
          </div>
        </section>

        {/* Logo Icon Variants */}
        <section className="mb-16 bg-white rounded-lg p-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Logo Icon (Simplified)</h2>
          <p className="text-gray-600 mb-8">Perfect for favicons, app icons, or compact spaces</p>
          
          <div className="flex flex-wrap gap-8 items-end">
            <div>
              <p className="text-sm text-gray-600 mb-4">128px</p>
              <LogoIcon size={128} />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">96px</p>
              <LogoIcon size={96} />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">64px</p>
              <LogoIcon size={64} />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">48px - Default</p>
              <LogoIcon size={48} />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">32px</p>
              <LogoIcon size={32} />
            </div>
          </div>
        </section>

        {/* Logo Icon - Dark Background */}
        <section className="mb-16 bg-black rounded-lg p-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Logo Icon - Dark Background</h2>
          
          <div className="flex flex-wrap gap-8 items-end">
            <div>
              <p className="text-sm text-gray-400 mb-4">128px</p>
              <LogoIcon size={128} variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">96px</p>
              <LogoIcon size={96} variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">64px</p>
              <LogoIcon size={64} variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">48px - Default</p>
              <LogoIcon size={48} variant="inverse" />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">32px</p>
              <LogoIcon size={32} variant="inverse" />
            </div>
          </div>
        </section>

        {/* Colored Backgrounds */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Logo on Brand Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pure Black Background */}
            <div className="p-12 rounded-lg" style={{ backgroundColor: brandColors.primary.black }}>
              <p className="text-sm text-white mb-4">Pure Black (#000000)</p>
              <Logo size="medium" variant="inverse" />
            </div>
            
            {/* Gray 1 - Dark */}
            <div className="p-12 rounded-lg" style={{ backgroundColor: brandColors.neutral.dark }}>
              <p className="text-sm text-white mb-4">Gray 1 - Dark (#333333)</p>
              <Logo size="medium" variant="inverse" />
            </div>
            
            {/* Gray 4 - Background */}
            <div className="p-12 rounded-lg" style={{ backgroundColor: brandColors.neutral.background }}>
              <p className="text-sm text-gray-600 mb-4">Gray 4 - Background (#F5F5F7)</p>
              <Logo size="medium" />
            </div>
            
            {/* White */}
            <div className="p-12 rounded-lg border" style={{ backgroundColor: '#FFFFFF' }}>
              <p className="text-sm text-gray-600 mb-4">White (#FFFFFF)</p>
              <Logo size="medium" />
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="bg-white rounded-lg p-12 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* DO */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✓ DO</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Maintain minimum sizes (150px digital, 1.25in print)</li>
                <li>✓ Use inverse variant on dark backgrounds</li>
                <li>✓ Preserve clear space around the logo</li>
                <li>✓ Use brand colors from brandConfig.js</li>
                <li>✓ Keep proportions intact</li>
                <li>✓ Use on solid, non-competing backgrounds</li>
              </ul>
            </div>
            
            {/* DON'T */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-600">✗ DON'T</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✗ Modify the logo's proportions or design</li>
                <li>✗ Add effects (shadows, glows, etc.)</li>
                <li>✗ Rotate or tilt the logo</li>
                <li>✗ Change the font family</li>
                <li>✗ Use colors outside the brand palette</li>
                <li>✗ Display smaller than minimum sizes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mt-16 bg-gray-900 rounded-lg p-12 text-white">
          <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Import the logo:</p>
              <code className="block bg-black p-4 rounded text-green-400 text-sm">
                import Logo, &#123; LogoIcon &#125; from './components/Logo';
              </code>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Default usage:</p>
              <code className="block bg-black p-4 rounded text-green-400 text-sm">
                &lt;Logo /&gt;
              </code>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Inverse variant (white, for dark backgrounds):</p>
              <code className="block bg-black p-4 rounded text-green-400 text-sm">
                &lt;Logo variant="inverse" size="large" /&gt;
              </code>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Logo icon for compact spaces:</p>
              <code className="block bg-black p-4 rounded text-green-400 text-sm">
                &lt;LogoIcon size=&#123;64&#125; variant="inverse" /&gt;
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
