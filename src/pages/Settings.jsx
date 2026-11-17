function Settings() {
    return (
        <div className="card">

            <div className="card-header">
                <h3 className="card-title">Application Settings</h3>
            </div>

            <div className="card-body">

                <div className="mb-3">
                    <label className="form-label">Application Name</label>
                    <input
                        className="form-control"
                        defaultValue="My Admin Panel"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="admin@example.com"
                    />
                </div>

                <button className="btn btn-primary">
                    Save Settings
                </button>

            </div>
        </div>
    );
}

export default Settings;