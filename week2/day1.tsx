// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Platform,
//   Dimensions,
//   PixelRatio,
//   TextStyle,
//   ViewStyle,
//   ScrollView,
// } from 'react-native';

// // Peringatan ini tetap dipertahankan
// if (Platform.OS !== 'android') {
//   console.warn('Aplikasi ini dirancang untuk dijalankan hanya di Android.');
// }

// const { width: screenWidth } = Dimensions.get('window');
// const fontScale: number = PixelRatio.getFontScale();

// // Definisikan tipe untuk objek warna
// interface ColorPalette {
//   primary: string;
//   accent: string;
//   background: string;
//   text: string;
//   grey: string;
//   darkBlue: string;
//   lightPurple: string;
// }

// const COLORS: ColorPalette = {
//   primary: '#00C853', // Hijau Material Design 500
//   accent: '#FFD600', // Kuning Material Design A400
//   background: '#F5F5F5', // Latar belakang yang sedikit lebih cerah
//   text: '#212121',
//   grey: '#CFD8DC', // Biru-Abu-abu 100
//   darkBlue: '#3F51B5', // Indigo 500
//   lightPurple: '#C5CAE9', // Indigo 100
// };

// // Gabungkan semua gaya dalam satu objek StyleSheet.create
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//     paddingTop: Platform.select({ android: 25, default: 0 }),
//   } as ViewStyle,
//   scrollContent: {
//     paddingHorizontal: 15,
//     paddingBottom: 30,
//   } as ViewStyle,
//   sectionContainer: {
//     padding: 15,
//     marginVertical: 10,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     elevation: 4,
//   } as ViewStyle,
//   sectionTitle: {
//     fontSize: 18 * fontScale,
//     fontWeight: 'bold',
//     color: COLORS.primary,
//     marginBottom: 8,
//   } as TextStyle,
//   divider: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: '#BDBDBD',
//     marginVertical: 10,
//   } as ViewStyle,
//   flexRowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     height: 70,
//     gap: 10,
//   } as ViewStyle,
//   absoluteParent: {
//     height: 100,
//     backgroundColor: COLORS.grey,
//     borderRadius: 6,
//     overflow: 'hidden',
//   } as ViewStyle,
//   absoluteChild: {
//     width: 50,
//     height: '50%',
//     backgroundColor: COLORS.darkBlue,
//     margin: 5,
//     borderRadius: 4,
//   } as ViewStyle,
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   } as ViewStyle,
//   styledButton: {
//     backgroundColor: COLORS.primary,
//     opacity: 0.95,
//     padding: 12,
//     borderWidth: 2,
//     borderColor: COLORS.accent,
//     borderRadius: 25,
//     elevation: 6,
//     alignSelf: 'center',
//   } as ViewStyle,
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//   } as TextStyle,
//   elevationRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//   } as ViewStyle,
//   elevationBox: {
//     width: 85,
//     height: 85,
//     backgroundColor: COLORS.lightPurple,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   } as ViewStyle,
//   transformedBox: {
//     width: 50,
//     height: 50,
//     backgroundColor: COLORS.accent,
//     borderRadius: 8,
//     alignSelf: 'flex-start',
//   } as ViewStyle,
// });

// // Definisikan interface untuk props komponen StyleSection
// interface StyleSectionProps {
//   title: string;
//   children: React.ReactNode;
// }

// /**
//  * Komponen pembungkus untuk setiap bagian demonstrasi styling.
//  */
// const StyleSection: React.FC<StyleSectionProps> = ({
//   title,
//   children,
// }) => (
//   <View style={styles.sectionContainer}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     {children}
//   </View>
// );

// const App: React.FC = () => {
//   // Style dinamis yang bergantung pada ukuran layar, dengan tipe ViewStyle
//   const dynamicFlexStyle: ViewStyle = StyleSheet.flatten([
//     { padding: 10, borderRadius: 4, justifyContent: 'center' },
//     // Logika responsif TypeScript
//     screenWidth > 400 ? { flexGrow: 1 } : { width: '45%' },
//     { backgroundColor: COLORS.accent },
//   ]) as ViewStyle;

//   return (
//     <View style={styles.container}>
//       {/* ScrollView ditambahkan di sini */}
//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         <StyleSection title="A. StyleSheet API (Reusability & Hairline)">
//           <Text style={{ color: COLORS.text }}>
//             Menggunakan <Text style={{ fontWeight: 'bold' }}>StyleSheet.create</Text>
//             {' '}untuk gaya yang dapat digunakan kembali
//             {' '}dan <Text style={{ fontWeight: 'bold' }}>hairlineWidth</Text>
//             {' '}untuk garis halus di bawah:
//           </Text>
//           <View style={styles.divider} />
//           <Text style={{ fontSize: 13, color: COLORS.text }}>Garis di atas memiliki ketebalan native (Hairline) yang sangat tipis.</Text>
//         </StyleSection>

//         <StyleSection title="B. Flexbox (Layout Baris Dinamis & Responsif)">
//           <Text style={{ marginBottom: 10, color: COLORS.text }}>
//             Demonstrasi `flexGrow` responsif berdasarkan lebar layar ({screenWidth.toFixed(0)} dp).
//           </Text>
//           <View style={styles.flexRowContainer}>
//             {/* Box 1: Menggunakan dynamicFlexStyle yang responsif */}
//             <View style={dynamicFlexStyle}>
//               <Text style={{ color: COLORS.text, fontWeight: '500' }}>Dynamic 1</Text>
//             </View>
            
//             {/* Box 2: Menggunakan flexBasis (prioritas) dan warna berbeda */}
//             <View
//               style={StyleSheet.flatten([
//                 dynamicFlexStyle, // Mengambil padding, borderRadius, dll.
//                 {
//                   backgroundColor: COLORS.primary,
//                   flexBasis: 120, // Prioritas lebar dasar 120px
//                   flexGrow: 0, // Jangan tumbuh
//                 }
//               ]) as ViewStyle}
//             >
//               <Text style={styles.buttonText}>Basis 120dp</Text>
//             </View>
//           </View>
//         </StyleSection>

//         <StyleSection title="C. Dimensi, Persentase, & Positioning (Absolute)">
//           <View style={styles.absoluteParent}>
//             {/* Kotak Relative 50% */}
//             <View style={styles.absoluteChild} />
//             {/* Overlay Absolute */}
//             <View style={styles.overlay}>
//               <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>ABSOLUTE FILL</Text>
//             </View>
//           </View>
//         </StyleSection>

//         <StyleSection title="D. Warna, Opacity, & Border (Button Style)">
//           <View style={styles.styledButton}>
//             <Text style={styles.buttonText}>Tombol Android Datar</Text>
//           </View>
//         </StyleSection>

//         <StyleSection title="E. Elevation (Shadow Android)">
//           <View style={styles.elevationRow}>
//             <View
//               style={StyleSheet.flatten([styles.elevationBox, { elevation: 8 }]) as ViewStyle}
//             >
//               <Text style={{ textAlign: 'center' }}>Elev 8</Text>
//             </View>
//             <View
//               style={StyleSheet.flatten([styles.elevationBox, { elevation: 3 }]) as ViewStyle}
//             >
//               <Text style={{ textAlign: 'center' }}>Elev 3</Text>
//             </View>
//             <View
//               style={StyleSheet.flatten([styles.elevationBox, { elevation: 15, backgroundColor: COLORS.primary }]) as ViewStyle}
//             >
//               <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Elev 15</Text>
//             </View>
//           </View>
//         </StyleSection>

//         <StyleSection title="F. Font & Transform (Scale & Rotate)">
//           <Text style={{ fontSize: 16 * fontScale, marginBottom: 15, color: COLORS.text }}>
//             Font Scaled: {(16 * fontScale).toFixed(2)}px (Base 16px).
//           </Text>
//           <View
//             style={StyleSheet.flatten([
//                 styles.transformedBox,
//                 {
//                   // Penerapan Transform
//                   transform: [
//                     { scale: 1.8 }, // Memperbesar 1.8x
//                     { rotate: '-10deg' }, // Memutar
//                     { translateX: 20 } // Pindah 20dp ke kanan
//                   ],
//                 }
//             ]) as ViewStyle}
//           >
//             <Text style={{ color: COLORS.text, fontSize: 12, textAlign: 'center' }}>XForm</Text>
//           </View>
//         </StyleSection>

//         <StyleSection title="G. Platform-Specific (Dimensi & Kepadatan)">
//           <Text style={{ marginBottom: 5, color: COLORS.text }}>
//             <Text style={{ fontWeight: 'bold' }}>ScreenWidth:</Text>{' '}
//             {screenWidth.toFixed(2)} dp.
//           </Text>
//           <Text style={{ marginBottom: 5, color: COLORS.text }}>
//             <Text style={{ fontWeight: 'bold' }}>Pixel Density (DP ke PX):</Text>{' '}
//             {PixelRatio.get().toFixed(2)}x.
//           </Text>
//           <Text style={{ color: COLORS.text }}>
//             Padding atas ({' '}
//             <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
//               {Platform.OS}
//             </Text>{' '}
//             ) disesuaikan dengan status bar Android (25dp).
//           </Text>
//         </StyleSection>

//       </ScrollView>
//     </View>
//   );
// };

// export default App;