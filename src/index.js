import { registerFormatType } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import { Popover, TabPanel } from "@wordpress/components";
import { useState, useRef } from "@wordpress/element";

const RutasAlergenos = miPluginData;

const IconoAlergenos = {
  cuadrada: [
    { name: "Apio", file: "apio.png" },
    { name: "Huevo", file: "huevo.png" },
    { name: "Altramuces", file: "altramuces.png" },
    { name: "Crustaceo", file: "crustaceo.png" },
    { name: "Cacahuete", file: "cacahuete.png" },
    { name: "Fruto de Cascara", file: "frutoCascara.png" },
    { name: "Gluten", file: "gluten.png" },
    { name: "Leche", file: "leche.png" },
    { name: "Molusco", file: "molusco.png" },
    { name: "Pescado", file: "pescado.png" },
    { name: "Sesamo", file: "sesamo.png" },
    { name: "Soja", file: "soja.png" },
    { name: "Sulfito", file: "sulfito.png" },
  ],
  redonda: [
    { name: "Apio", file: "apio.png" },
    { name: "Huevo", file: "huevo.png" },
    { name: "Altramuces", file: "altramuces.png" },
    { name: "Crustaceo", file: "crustaceo.png" },
    { name: "Cacahuete", file: "cacahuete.png" },
    { name: "Fruto de Cascara", file: "frutoCascara1.png" },
    { name: "Gluten", file: "gluten.png" },
    { name: "Leche", file: "leche.png" },
    { name: "Molusco", file: "molusco1.png" },
    { name: "Pescado", file: "pescado.png" },
    { name: "Sesamo", file: "sesamo.png" },
    { name: "Soja", file: "soja.png" },
    { name: "Sulfito", file: "sulfito1.png" },
  ],
  triangular: [
    { name: "Apio", file: "apio.png" },
    { name: "Huevo", file: "huevo.png" },
    { name: "Altramuces", file: "altramuces.png" },
    { name: "Crustaceo", file: "crustaceo.png" },
    { name: "Cacahuete", file: "cacahuete.png" },
    { name: "Fruto de Cascara", file: "frutoCascara.png" },
    { name: "Gluten", file: "gluten.png" },
    { name: "Leche", file: "leche.png" },
    { name: "Molusco", file: "molusco.png" },
    { name: "Pescado", file: "pescado.png" },
    { name: "Sesamo", file: "sesamo.png" },
    { name: "Soja", file: "soja.png" },
    { name: "Sulfito", file: "sulfito.png" },
  ],
};

const tabColors = {
  cuadrada: { background: "#0073aa" },
  redonda: { background: "#d93025" },
  triangular: { background: "#3a6f35" },
};

const IconoAlergenoButton = ({ isActive, value, onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const insertIcon = (url, name) => {
    const imgNode = wp.richText.create({
      html: `<img src="${url}" alt="${name}" style="width: 45px; height: 45px; vertical-align: bottom; display: inline-block;" />`,
    });

    const newContent = wp.richText.insert(value, imgNode);
    onChange(newContent);
    setOpen(false);
  };

  return (
    <>
      <RichTextToolbarButton
        icon="smiley"
        title="Icono alérgeno"
        onClick={() => setOpen(!isOpen)}
        isActive={isActive}
        ref={buttonRef}
      />

      {isOpen && (
        <Popover
          focusOnMount={false}
          noArrow
          onClose={() => setOpen(false)}
          anchorRef={buttonRef.current}
          position="bottom center"
        >
          <div
            style={{
              width: "400px",
              height: "auto",
              position: "fixed",
              top: "50%",
              left: "200px",
              transform: "translateY(-50%)",
              backgroundColor: "#fff",
              zIndex: 9999,
              overflowY: "auto",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              borderRadius: "8px 0 0 8px",
            }}
          >
            <div
              style={{
                textAlign: "right",
                padding: "5px",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "18px",
                  cursor: "pointer",
                  paddingRight: "10px",
                }}
              >
                ❌
              </button>
            </div>

            <TabPanel
              className="icon-tabs"
              activeClass="active-tab"
              tabs={[
                { name: "cuadrada", title: "Cuadrada" },
                { name: "redonda", title: "Redonda" },
                { name: "triangular", title: "Triangular" },
              ]}
            >
              {(tab) => {
                const colors = tabColors[tab.name];
                return (
                  <div
                    style={{
                      backgroundColor: colors.background,
                      padding: "10px",
                      borderRadius: "6px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {IconoAlergenos[tab.name].map((icon) => (
                      <div
                        key={icon.file}
                        style={{
                          width: "70px",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            borderRadius: "6px",
                          }}
                          onClick={() =>
                            insertIcon(
                              RutasAlergenos[tab.name] + icon.file,
                              icon.name
                            )
                          }
                        >
                          <img
                            src={RutasAlergenos[tab.name] + icon.file}
                            alt={icon.name}
                            style={{ width: "36px", height: "36px" }}
                          />
                        </div>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        >
                          {icon.name}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }}
            </TabPanel>
          </div>
        </Popover>
      )}
    </>
  );
};

registerFormatType("mi-plugin/icono-alergeno", {
  title: "Insertar icono alérgeno",
  tagName: "span",
  className: null,
  edit: IconoAlergenoButton,
});
