import React, { useEffect, useRef } from 'react';

const VueRemote = () => {
  window.__POWERED_BY_MF__ = true;

  const containerRef = useRef(null);
  const vueAppRef = useRef(null);

  useEffect(() => {
    let canceled = false;

    import('droids_shop_remote/RemoteApp')
      .then((mod) => {
        if (canceled || !containerRef.current) return;

        // mount должен вернуть Vue instance
        vueAppRef.current = mod.mount(containerRef.current);
      })
      .catch((err) => {
        console.error('Ошибка загрузки droids_shop_remote/RemoteApp', err);
      });

    return () => {
      canceled = true;

      if (vueAppRef.current) {
        vueAppRef.current.$destroy();
        vueAppRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default VueRemote;
