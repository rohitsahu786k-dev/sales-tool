import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import { store } from './Redux/store';
import Vslider from './Components/Vslider/Vslider.js';
import { Provider } from 'react-redux';
import CircularMenu from './Components/CircularMenu/CircularMenu';
import { deskList } from './Redux/data/desk';

const isTrackingParam = (param) =>
  ['_gl', '_gcl_au', '_ga', '_gid'].includes(param) || param.startsWith('_ga_');

const siteUrl = 'https://console.onepws.com';

const toSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const stripHtml = (value = '') =>
  value
    .replace(/&trade;/g, 'TM')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const setLinkTag = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

function SeoMeta() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const product = deskList.find((desk) => {
      const slug = toSlug(desk.title);
      return location.pathname === `/consoles/${slug}` || location.pathname === `/consoles/${desk.id}-${slug}`;
    });

    if (product) {
      const cleanPath = `/consoles/${toSlug(product.title)}`;
      if (location.pathname !== cleanPath) {
        navigate(cleanPath, { replace: true });
        return;
      }
    }

    const isListingPage = location.pathname === '/consoles' || location.pathname === '/';
    const title = product
      ? `${product.title} Control Room Console | OnePWS`
      : 'Control Room Consoles | OnePWS';
    const description = product
      ? stripHtml(product.shortDescription).slice(0, 160)
      : 'Explore OnePWS control room consoles, ergonomic operator desks, command center furniture, and modular console solutions for mission critical environments.';
    const canonicalPath = product ? `/consoles/${toSlug(product.title)}` : '/consoles';
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    const imageUrl = `${siteUrl}/logo512.png`;

    document.title = title;
    setMetaTag('meta[name="description"]', { name: 'description', content: description });
    setMetaTag('meta[name="robots"]', { name: 'robots', content: product || isListingPage ? 'index, follow' : 'noindex, follow' });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: title });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: product ? 'product' : 'website' });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaTag('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    setLinkTag('canonical', canonicalUrl);

    const schema = {
      '@context': 'https://schema.org',
      '@type': product ? 'Product' : 'CollectionPage',
      name: product ? `${product.title} Control Room Console` : 'OnePWS Control Room Consoles',
      description,
      url: canonicalUrl,
      image: imageUrl,
      brand: {
        '@type': 'Brand',
        name: 'OnePWS',
      },
    };

    let schemaElement = document.getElementById('route-schema');
    if (!schemaElement) {
      schemaElement = document.createElement('script');
      schemaElement.id = 'route-schema';
      schemaElement.type = 'application/ld+json';
      document.head.appendChild(schemaElement);
    }
    schemaElement.textContent = JSON.stringify(schema);
  }, [location.pathname, navigate]);

  return null;
}

function CleanUrlParams() {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!location.search) return;

    const params = new URLSearchParams(location.search);
    const originalParams = params.toString();

    Array.from(params.keys()).forEach((param) => {
      if (isTrackingParam(param)) {
        params.delete(param);
      }
    });

    const nextSearch = params.toString();
    if (nextSearch === originalParams) return;

    navigate(
      {
        pathname: location.pathname,
        search: nextSearch ? `?${nextSearch}` : '',
        hash: location.hash,
      },
      { replace: true }
    );
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}

function App() {
  const [, setPlayVideo] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <CleanUrlParams />
        <SeoMeta />
        <div className='main-back min-h-screen w-full'>
          <div className="w-full p-0">
            <div className='frame'>
              <Routes>
                {/* / → redirect to consoles listing */}
                <Route path='/' element={<Navigate to="/consoles" replace />} />

                {/* Consoles listing page */}
                <Route path='/consoles' element={<Vslider setPlayVideo={setPlayVideo} />} />

                {/* Direct product URL — e.g. /consoles/xlat-ze */}
                <Route path='/consoles/:slug' element={<CircularMenu />} />

                {/* Catch-all */}
                <Route path='*' element={<Navigate to="/consoles" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
