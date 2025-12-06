"use client";

export default function SplineBackground() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
            <iframe
                src='https://my.spline.design/claritystream-RkoWNgNqvGbnbE3r0LaA3Ei7/'
                frameBorder='0'
                width='100%'
                height='100%'
                style={{ width: '100%', height: '100%', border: 'none', transform: 'scale(1.2)', transformOrigin: 'center', pointerEvents: 'none' }}
            />
        </div>
    );
}
