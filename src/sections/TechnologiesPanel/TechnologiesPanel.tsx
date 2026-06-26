import './TechnologiesPanel.css'

type TechnologiesPanelProps = {
    icons: string[];
}

function TechnologiesPanel({ icons }: TechnologiesPanelProps) {
    return (
        <section className="handled-technologies container" id="handled-technologies">
            <div className="technologies-title">
                <h2>Tecnologías</h2>
                <p>Sigo aprendiendo más cada día</p>
            </div>

            <div className="technologies-container">
                <ul className="technologies-list">
                    {icons.map((icon, index) => (
                        <li key={index}>
                            <img
                                src={icon}
                                alt={`technology-${index}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default TechnologiesPanel;