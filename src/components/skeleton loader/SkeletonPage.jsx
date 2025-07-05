import { motion } from "framer-motion";

const pulseVariant = {
  initial: { opacity: 0.4 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const SkeletonHeroSection = () => {
  return (
    <div
      className="heroSectionContainer"
      style={{
        height: "100vh", // Full screen height
        width: "100vw",  // Full screen width
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f3f4f6", // Light gray background
        padding: "2rem",
        paddingLeft: "10rem",
        gap: "2rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* LEFT SECTION */}
      <section
        className="leftSection"
        style={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Avatar */}
        <motion.div
          variants={pulseVariant}
          initial="initial"
          animate="animate"
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            backgroundColor: "#d1d5db",
            position: "relative",
          }}
        />

        {/* Name */}
        <motion.div
          variants={pulseVariant}
          initial="initial"
          animate="animate"
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "6px",
            backgroundColor: "#d1d5db",
          }}
        />

        {/* Description */}
        <motion.div
          variants={pulseVariant}
          initial="initial"
          animate="animate"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "60px",
            borderRadius: "6px",
            backgroundColor: "#d1d5db",
          }}
        />

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              variants={pulseVariant}
              initial="initial"
              animate="animate"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#d1d5db",
              }}
            />
          ))}
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section
        className="RightSection"
        style={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={pulseVariant}
          initial="initial"
          animate="animate"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#d1d5db",
            borderRadius: "16px",
          }}
        />
      </section>
    </div>
  );
};

export default SkeletonHeroSection;
