// ResumeDocument.js
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  listItem: {
    marginBottom: 2,
  },
});

const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>JOHN DOE</Text>
        <Text>244-A Nyay Khand-3 Indirapuram Ghaziabad</Text>
        <Text>LinkedIn | Github | Email | Phone</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Experience</Text>
        <Text style={styles.bold}>ABC Company (Software Engineer)</Text>
        <Text>startdate - enddate | City, State</Text>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.listItem}>• Developed features using React</Text>
          <Text style={styles.listItem}>• Collaborated with team on Node.js backend</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Skills</Text>
        <Text>HTML, CSS, JavaScript, React, Node.js, MongoDB</Text>
        <Text>Soft Skills: Team Player, Fast Learner</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        <Text>GGSIPU | B.Tech | 2022 - 2026 | GPA: 8.5</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Achievements</Text>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.listItem}>• Ranked top 10 in coding contest</Text>
          <Text style={styles.listItem}>• Completed internship at XYZ</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
