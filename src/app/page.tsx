import Card from "@/components/Card"
import { Col, Row } from "antd"
import { IoDiamondOutline } from "react-icons/io5";

const services = [
  {
    id: 1,
    title: "Apps",
    description: "Get your mobile app built by us",
    color: "#0A488F",
    dtsu: 100,
    image: "apps.svg"
  },
  {
    id: 2,
    title: "BI",
    description: "Create Dashboards",
    color: "#579064",
    dtsu: 100,
    image: "bi.svg"
  },
  {
    id: 3,
    title: "HR",
    description: "Talents",
    color: "#950000",
    dtsu: 50,
    image: "hr.svg"
  },
  {
    id: 4,
    title: "Operations",
    description: "ERP Management",
    color: "#8F6C0A",
    dtsu: 100,
    image: "operations.svg"
  },
]

export default function Home() {
  return (
    <div className="p-16 h-full min-h-screen pt-28" id="home">
      <h1 className="text-4xl flex items-center gap-2 text-cyan-600">Get Support <IoDiamondOutline/></h1>
      <Row gutter={[20,20]} className="mt-6" justify="space-between" align="middle">
        {services.map((service, index) => (
          <Col key={index} sm={24} md={12} lg={6}>
            <Card {...service} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
