// NewsList.js

import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

const NewsList = ({ articles }) => {
  return (
    <View style={styles.newsList}>
      {articles.map((article) => (
        <View style={styles.newsCard} key={article.uuid}>
          <Image style={styles.cardImage} source={{ uri: article.image }} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{article.headline}</Text>
            <Text style={styles.cardSummary}>{article.summary}</Text>
            <Text
              style={styles.readMoreLink}
              onPress={() => Linking.openURL(article.qmUrl)}
            >
              Read more
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  newsList: {
    // Add your styles for the container
  },
  newsCard: {
    // Add your styles for the news card
  },
  cardImage: {
    // Add your styles for the card image
  },
  cardContent: {
    // Add your styles for the card content
  },
  cardTitle: {
    // Add your styles for the card title
  },
  cardSummary: {
    // Add your styles for the card summary
  },
  readMoreLink: {
    // Add your styles for the read more link
  },
});

export default NewsList;
