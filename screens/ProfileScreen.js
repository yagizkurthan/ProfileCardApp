import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const currentTheme = COLORS.light;

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      <View style={[
        styles.card,
        {
          backgroundColor: currentTheme.card,
          padding: SPACING.lg,
          width: '85%',
        }
      ]}>
        <Ionicons
          name="person-circle-outline"
          size={80}
          color={currentTheme.text}
        />
        <Text style={[styles.name, { color: currentTheme.text }]}>
          John Doe
        </Text>
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Mobile Developer
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: RADII.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
});
