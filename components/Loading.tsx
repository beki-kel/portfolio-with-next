import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
            <style jsx>{`
                .loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(2, 6, 23);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                .spinner {
                    border: 8px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 8px solid #3498db;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;
