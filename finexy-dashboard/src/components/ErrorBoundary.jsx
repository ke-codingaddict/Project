import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
                    <h1>Something went wrong.</h1>
                    <div style={{ background: '#ffebee', padding: '15px', borderRadius: '4px', border: '1px solid #ffcdd2', marginTop: '10px' }}>
                        <h3 style={{ margin: '0 0 10px', color: '#c62828' }}>Error: {this.state.error && this.state.error.toString()}</h3>
                        <pre style={{ overflow: 'auto', padding: '10px', background: '#fff', border: '1px solid #eee' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
