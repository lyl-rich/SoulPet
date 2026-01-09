import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PetProfileScreen({ pet, goBack }) {
  if (!pet) return null;

  const handleWhatsApp = () => {
    // Substituir pelo número)
    const phoneNumber = '5511999999999'; 
    const message = `Olá! Tenho muito interesse em adotar o(a) ${pet.name}. Poderia me dar mais informações?`;
    
    // Cria a URL formatada
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          // Caso o WhatsApp não esteja instalado, tenta abrir pelo navegador
          const browserUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          return Linking.openURL(browserUrl);
        }
      })
      .catch(() => Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={goBack}>
        <FontAwesome5 name="times" size={24} color="black" />
      </TouchableOpacity>
      
      <ScrollView bouncer={false}>
        <Image source={{ uri: pet.image }} style={styles.mainImg} />
        
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.name}>{pet.name}</Text>
              <Text style={styles.breed}>{pet.breed}</Text>
            </View>
            <View style={styles.ageBadge}>
              <Text style={styles.ageText}>{pet.age}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>História de Resgate</Text>
          <Text style={styles.historyText}>{pet.history}</Text>
          
          <TouchableOpacity style={styles.btn} onPress={handleWhatsApp}>
            <FontAwesome5 name="whatsapp" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.btnText}>Adotar o {pet.name}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  back: { position: 'absolute', top: 50, left: 20, zIndex: 10, backgroundColor: 'white', borderRadius: 25, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  mainImg: { width: '100%', height: 400 },
  content: { padding: 25, marginTop: -30, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  name: { fontSize: 32, fontWeight: 'bold' },
  breed: { color: '#1152d4', fontSize: 18, fontWeight: '500' },
  ageBadge: { backgroundColor: '#f0f4ff', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12 },
  ageText: { color: '#1152d4', fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#eee', marginBottom: 25 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  historyText: { fontSize: 16, lineHeight: 26, color: '#444', marginBottom: 40 },
  btn: { backgroundColor: '#25D366', padding: 20, borderRadius: 18, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, // Cor oficial do WhatsApp
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});