import Card from "@/components/Card"
import { Col, Row } from "antd"

const services = [
  {
    id: 1,
    title: "Apps",
    description: "Get your mobile app built by us",
    color: "blue",
    dtsu: 100,
  },
  {
    id: 2,
    title: "BI",
    description: "Create Dashboards",
    color: "green",
    dtsu: 100,
  },
  {
    id: 3,
    title: "HR",
    description: "Talents",
    color: "red",
    dtsu: 50,
  },
  {
    id: 4,
    title: "Operations",
    description: "ERP Management",
    color: "yellow",
    dtsu: 100,
  },
]

export default function Home() {
  return (
    <div className="p-16">
      <h1>Home</h1>
      <Row gutter={16} className="mt-4" justify="space-between">
        {services.map((service, index) => (
          <Col key={index} span={6}>
            <Card {...service} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
