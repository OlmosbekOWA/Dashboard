import { Card, List, Typography, Row, Col } from "antd";
const { Title } = Typography;

const Skils = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "#eb2f96",
      skills: [
        "HTML5, CSS3, SCSS",
        "Tailwind CSS, Material UI, Shadcn UI, Ant Design, React Toastify",
        "JavaScript (ES6+), TypeScript",
        "React.js (Hooks, Context API, Router)",
        "Next.js (SSR/SSG)",
      ],
    },
    {
      title: "Backend",
      color: "#1890ff",
      skills: ["Node.js (basic)", "Express.js (basic)"],
    },
    {
      title: "Tools & Others",
      color: "#52c41a",
      skills: [
        "Git & GitHub",
        "Figma (UI/UX)",
        "REST API, Axios, Fetch",
        "Responsive Design & Adaptive UI",
      ],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fff", padding: "20px" }}>
      <Title level={1} style={{ textAlign: "center", marginBottom: "20px" }}>
        💡 My Skills
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {skillCategories.map((category, idx) => (
          <Col
            key={idx}
            xs={24}   // telefonlarda 1 ustun
            sm={24}   // kichik ekranlarda ham 1 ustun
            md={24}   // o‘rta ekranlarda ham 1 ustun
            lg={12}   // katta ekranlarda (≥992px) 2 ustun
            xl={12}   // juda katta ekranlarda ham 2 ustun
          >
            <Card
              title={
                <span style={{ color: category.color, fontWeight: "bold" }}>
                  {category.title}
                </span>
              }
              bordered={false}
              style={{
                borderTop: `4px solid ${category.color}`,
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                height: "100%",
              }}
              hoverable
            >
              <List
                dataSource={category.skills}
                renderItem={(skill) => (
                  <List.Item style={{ border: "none", padding: "8px 0" }}>
                    <span>{skill}</span>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skils;
