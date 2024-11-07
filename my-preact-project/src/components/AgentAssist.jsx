import { h } from 'preact';

const AgentAssist = () => (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <h2>Agent Assist</h2>
        <p>Status: Not Ready</p>
        <p>Call Notes:</p>
        <textarea placeholder="Add notes throughout the call" style={{ width: '100%', height: '80px' }}></textarea>
        <button>Generate Summary</button>
        <button>Create Customer Contact</button>
    </div>
);

export default AgentAssist;
