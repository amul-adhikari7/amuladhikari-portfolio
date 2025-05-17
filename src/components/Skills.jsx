import { Box, Typography, Grid, Paper, Grow, Avatar } from "@mui/material";
import AllInboxIcon from "@mui/icons-material/AllInbox";

const skillData = [
  { name: "React", color: "#61dafb", level: 70 },
  { name: "JavaScript", color: "#f7df1e", level: 75 },
  { name: "Node.js", color: "#3c873a", level: 45 },
  { name: "TailwindCSS", color: "#38bdf8" },
  { name: "UI/UX Design", color: "#a78bfa", level: 80 },
  { name: "SCSS", color: "#c6538c", level: 60 },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ px: { xs: 2, md: 6 }, py: 12, bgcolor: "#f0fdfa" }}>
      <Box maxWidth="md" mx="auto">
        <Typography
          variant="h3"
          fontWeight={900}
          align="center"
          color="#0f172a"
          mb={2}
          letterSpacing={1}
        >
          <span style={{ color: "#10b981" }}>Skills</span> & Tools
        </Typography>
        <Typography align="center" color="#64748b" mb={8} fontSize={18}>
          My favorite technologies for building modern web experiences
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {skillData.map((skill, idx) => (
            <Grow in timeout={500 + idx * 180} key={skill.name}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 6,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "white",
                    boxShadow: "0 4px 32px 0 rgba(16,185,129,0.10)",
                    transition:
                      "transform 0.45s cubic-bezier(.4,2,.6,1), box-shadow 0.45s cubic-bezier(.4,2,.6,1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.08)",
                      boxShadow: "0 16px 48px 0 rgba(16,185,129,0.22)",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Avatar
                      sx={{
                        bgcolor: skill.color,
                        width: 64,
                        height: 64,
                        boxShadow: 3,
                        transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                        transform: "scale(1)",
                        "&:hover": {
                          transform: "scale(1.15) rotate(-8deg)",
                        },
                      }}
                    >
                      <AllInboxIcon sx={{ fontSize: 38, color: "#fff" }} />
                    </Avatar>
                    <Box
                      sx={{
                        minWidth: 54,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: "#f1f5f9",
                        boxShadow: 1,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 700,
                        fontSize: 18,
                        color: skill.color,
                        letterSpacing: 1,
                        transition: "background 0.4s",
                        animation: "fadeInRight 1s",
                      }}
                    >
                      {skill.level ? `${skill.level}%` : `${60 + idx * 7}%`}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#0f172a"
                    align="center"
                    letterSpacing={1}
                    sx={{
                      mb: 1,
                      transition: "color 0.4s",
                      "&:hover": { color: skill.color },
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Box
                    sx={{
                      width: "70%",
                      height: 8,
                      borderRadius: 4,
                      bgcolor: "#e0e7ef",
                      mt: 2,
                      mb: 1,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: skill.level
                          ? `${skill.level}%`
                          : `${60 + idx * 7}%`,
                        height: "100%",
                        borderRadius: 4,
                        bgcolor: skill.color,
                        transition: "width 1.2s cubic-bezier(.4,2,.6,1)",
                        boxShadow: `0 0 16px 0 ${skill.color}55`,
                        animation: "growBar 1.2s",
                      }}
                    />
                    {/* Animated gradient shine */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(120deg, transparent 60%, #fff7 80%, transparent 100%)",
                        opacity: 0.5,
                        pointerEvents: "none",
                        animation: "shine 2.2s infinite",
                      }}
                    />
                  </Box>
                  {/* Decorative floating shapes */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -18,
                      right: -18,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: skill.color,
                      opacity: 0.12,
                      zIndex: 0,
                      filter: "blur(2px)",
                      animation: "float 3s ease-in-out infinite",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -14,
                      left: -14,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: skill.color,
                      opacity: 0.1,
                      zIndex: 0,
                      filter: "blur(1.5px)",
                      animation: "float2 4s ease-in-out infinite",
                    }}
                  />
                </Paper>
              </Grid>
            </Grow>
          ))}
        </Grid>
        {/* Keyframes for custom animations */}
        <style>{`
          @keyframes growBar {
            0% { width: 0; }
            100% { width: 100%; }
          }
          @keyframes shine {
            0% { left: -100%; }
            60% { left: 100%; }
            100% { left: 100%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default Skills;
