import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure this module is installed

const FAQItem = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <Icon name={isCollapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="#E55151" />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const FAQPage = () => {
  const faqData = [
    { question: "What is Vijva?", answer: "Vijva is an app that connects volunteers with opportunities to help others in need." },
    { question: "How do I volunteer?", answer: "To volunteer, simply sign up on our app, browse opportunities, and select one that suits you." },
    { question: "How can I get help?", answer: "If you need help, you can use the 'Get Helpline Information' button to find resources or the SOS button for immediate assistance." },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FAQs</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE9999',
    padding: 20,
  },
  heading: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5A0000', // Heading color
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  faqItem: {
    marginBottom: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFB7B7', // Question background color
    padding: 15,
    borderRadius: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A0000', // Question text color
  },
  answerContainer: {
    backgroundColor: '#B82828', // Answer background color
    padding: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  answer: {
    fontSize: 14,
    color: '#ffffff', // Answer text color
  },
});

export default FAQPage;
