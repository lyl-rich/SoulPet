import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function DogsScreen({ goBack, goToPet }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}><FontAwesome5 name="arrow-left" size={24} color="#1152d4" /></TouchableOpacity>
        <Text style={styles.title}>Cães para Adoção</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <TouchableOpacity style={styles.card} onPress={() => goToPet({
          name: 'Pipoca',
          breed: 'Raça Comum',
          age: '2 anos',
          image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600',
          history: 'O Pipoca foi encontrado numa estrada. É muito enérgico, adora correr e precisa de uma família que goste de passeios ao ar livre.'
        })}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500' }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.name}>Pipoca</Text>
            <Text style={styles.details}>Raça Comum • 2 anos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => goToPet({
          name: 'Bolinha',
          breed: 'Beagle',
          age: '4 anos',
          image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600',
          history: 'A Bolinha é uma cadela muito calma e companheira. Ideal para quem vive num apartamento.'
        })}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500' }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.name}>Bolinha</Text>
            <Text style={styles.details}>Beagle • 4 anos</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, gap: 15 },
  title: { fontSize: 22, fontWeight: 'bold' },
  scroll: { padding: 20 },
  card: { backgroundColor: '#f9f9f9', borderRadius: 15, marginBottom: 20, overflow: 'hidden', elevation: 2 },
  img: { width: '100%', height: 200 },
  info: { padding: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  details: { color: '#666', marginTop: 5 }
});