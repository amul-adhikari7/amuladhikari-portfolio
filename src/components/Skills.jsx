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
                    transition: "transform 0.35s, box-shadow 0.35s",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.06)",
                      boxShadow: "0 12px 40px 0 rgba(16,185,129,0.18)",
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
                      }}                    >
                      {skill.level ? `${skill.level}%` : `${60 + idx * 7}%`}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#0f172a"
                    align="center"
                    letterSpacing={1}
                  >
                    {skill.name}
                  </Typography>
                  <Box
                    sx={{
                      width: "60%",
                      height: 4,
                      borderRadius: 2,
                      bgcolor: "#e0e7ef",
                      mt: 2,
                      mb: 1,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{                        width: skill.level ? `${skill.level}%` : `${60 + idx * 7}%`,
                        height: "100%",
                        borderRadius: 2,
                        bgcolor: skill.color,
                        transition: "width 1s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
