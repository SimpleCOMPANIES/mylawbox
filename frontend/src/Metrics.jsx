import React from 'react';

function Metrics() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="https://lawbox.tepconic.com/"
        title="Lawbox Metrics"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}

export default Metrics;