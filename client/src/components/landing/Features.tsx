const features = [
    { title: "Secure Uploads", desc: "Your files are securely uploaded and stored via Cloudinary." },
    { title: "Smart Visualization", desc: "Choose columns to auto-generate clean charts." },
    { title: "Export Charts", desc: "Download charts as PNG or PDF with one click." },
    { title: "Multi-Sheet Support", desc: "Easily switch between and analyze multiple sheets from one Excel file.",},
    { title: "Custom Chart Styling", desc: "Choose from themes, color palettes, and chart types to suit your brand.",},
    { title: "Collaborative Access", desc: "Share your charts securely with team members or clients with view/edit access.",},
];

const Features = () => (
    <section id="features" className="py-16 px-6 bg-gray-200/10 h-screen flex flex-col justify-center rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold ">{f.title}</h3>
                    <p className="mt-2 text-gray-600">{f.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
