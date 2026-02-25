import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="Harsh-Karia"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        showWeekdayLabels={true}
        theme={{
          level4: '#c770f0',
          level3: '#a855f7',
          level2: '#8b5cf6',
          level1: '#7c3aed',
          level0: 'rgba(255, 255, 255, 0.1)',
        }}
        style={{
          color: '#ffffff'
        }}
      />
    </Row>
  );
}

export default Github;
