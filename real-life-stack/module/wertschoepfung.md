# Wertschöpfungs-Modul (E-Minuto Integration)

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** NEU - Konzept - CRITICAL für Business!

---

## Übersicht

Das **Wertschöpfungs-Modul** ist die digitale Erweiterung des Money-Printers - **E-Minuto Integration** von Sebastian Garleck.

**WICHTIG:** Erweiterung von Money-Printer - in jede beliebige Währung konvertierbar!

### Zweck
- Digitale Wertschöpfung ohne klassisches Geld
- Offline + Online Funktionalität
- Transparenz (Offline vs. Online Value sichtbar)
- Community-Währungen (Minuto, Grado, Dank)
- Money-Printer Connection (Anton's Projekt)

---

## E-Minuto - Was ist das?

**E-Minuto** ist Sebastian Garleck's Arbeit - eine digitale Wertschöpfungs-Plattform ohne klassisches Geld.

### Kernprinzipien:
- **Wertschöpfung statt Währung:** Jeder Mensch schafft Wert durch seine Zeit und Begabungen
- **Konvertierbar:** E-Minuto kann in jede beliebige Währung konvertiert werden
- **Dezentral:** Keine zentrale Bank, keine zentrale Kontrolle
- **Transparent:** Alle Transaktionen sind sichtbar (Web of Trust)
- **Offline + Online:** Funktioniert auch ohne Internet (QR-Codes)

### Technologie:
- **Gebaut in Rust** (muss portiert werden für Real-Life Stack)
- **Blockchain-basiert** (optional - für Transparenz)
- **QR-Code-System** (für Offline-Zahlungen)
- **Sequenzielle Nummerierung:** Offline + Online getrennt (Betrugsprävention)

---

## Hauptfunktionen

### 1. Offline + Online Funktionalität

#### Offline Value:
- **QR-Code-Scans:** Zahlungen ohne Internet
- **Scan → Value wird offline gespeichert**
- **Synchronisation wenn online** (über Web of Trust Keypair-Login)
- **Transparenz:** Offline-Value vs. Online-Value sichtbar machen

#### Online Value:
- **Echtzeit-Synchronisation** (wenn online)
- **Blockchain-Logging** (optional - für Transparenz)
- **Web of Trust Verification** (Betrugsprävention)

#### Sync-Prozess:
1. User ist offline → scannt QR-Code → Value wird lokal gespeichert
2. User kommt online → App synchr onisiert mit Server
3. Offline-Value wird zu Online-Value
4. Transparenz: User sieht, was offline und was online ist

### 2. Individuelle Währungen

#### Jeder User kann eigene Wertschöpfungs-Einheit erstellen:
- **"Dank"** (Standard-Einheit in Real-Life Stack)
- **"Minuto"** (Sebastian Garleck's Einheit)
- **"Grado"** (Community-spezifisch)
- **Eigene Einheiten:** Communities können eigene Währungen definieren

#### Community-Währungen:
- **Communities wählen Währung:** Z.B. "Wir nutzen Minuto"
- **Konvertierung:** Minuto ↔ Dank ↔ Grado ↔ € (optional)
- **Transparenz:** Alle Umrechnungskurse sichtbar

### 3. Sequenzielle Nummerierung

#### Betrugsprävention:
- **Offline-Value:** Sequenziell nummeriert (Offline-1, Offline-2, etc.)
- **Online-Value:** Sequenziell nummeriert (Online-1, Online-2, etc.)
- **Verification:** Web of Trust prüft Nummern bei Sync
- **Doppel-Ausgaben unmöglich:** Gleiche Nummer = Betrugsversuch

### 4. Money-Printer Connection

**CRITICAL:** Direkter Anschluss an Anton's Money-Printer!

#### Integration:
- **Tech-Stack koordinieren:** Was nutzt Anton? (React, Backend, DB)
- **API-Integration:** Wertschöpfungs-Modul ↔ Money-Printer
- **QR-Code-System:** Gemeinsame QR-Code-Generierung
- **Token-Scheine:** Physisch (Money-Printer) + Digital (Wertschöpfungs-Modul)

#### Token-Scheine:
- **50 Dank, 100 Dank** (physisch + digital)
- **QR-Code auf Schein** (scannbar für Zahlungen)
- **Verschlüsselung:** QR-Code verschlüsselt über Web of Trust
- **Verification:** QR-Code prüft gegen Web of Trust

### 5. Transparenz (CRITICAL!)

**Transparenz schafft Vertrauen!**

#### Was ist sichtbar:
- **Alle Transaktionen** (wer hat wem wie viel gegeben)
- **Offline vs. Online Value** (wie viel ist offline, wie viel online)
- **Community-Währungen** (welche Communities nutzen welche Währung)
- **Umrechnungskurse** (Minuto → Dank → €)

#### Web of Trust Integration:
- **Sichtbarkeit konfigurierbar:** Öffentlich vs. nur Freunde vs. Community
- **Trust-Levels:** Ich vertraue dir → ich sehe deine Transaktionen
- **Verschlüsselung:** QR-Codes verschlüsselt für Sicherheit

---

## QR-Code-System

### QR-Code-Generierung:
- **Offline-Zahlungen:** User generiert QR-Code → anderer User scannt
- **Wert-Übertragung:** QR-Code enthält Value-Betrag + Sequenznummer
- **Verification:** Web of Trust prüft QR-Code bei Sync

### QR-Code-Scan:
- **Mobile App:** QR-Code-Scanner integriert
- **Desktop:** QR-Code hochladen (Bild)
- **Offline:** QR-Code wird lokal gespeichert → Sync wenn online

### Token-Scheine (physisch):
- **Money-Printer druckt Scheine** (50 Dank, 100 Dank)
- **QR-Code auf Schein** (scannbar)
- **Schein = digitaler Value** (QR-Code repräsentiert Online-Value)

---

## Komponenten

### Wertschöpfungs-Übersicht (im Profil/Dashboard):
- Offline Value verfügbar
- Online Value verfügbar
- Letzte 3 Transaktionen
- Klick → Wertschöpfungs-Modul öffnet sich

### QR-Code-Scanner:
- Scan-Button → Kamera öffnet sich → QR-Code scannen
- Offline-Scan → Value lokal gespeichert
- Online-Scan → Value sofort übertragen

### QR-Code-Generator:
- "Zahlung senden" → Value-Betrag eingeben → QR-Code generiert
- QR-Code anzeigen → anderer User scannt
- Offline/Online Switch

---

## Verknüpfungen

**Wertschöpfungs-Modul benötigt:**
- **Web of Trust** (CRITICAL - Keypair-Login, Verification, Verschlüsselung)
- **Money-Printer** (Anton's Projekt - Tech-Stack koordinieren!)
- **Marktplatz-Modul** (Token-Scheine, Zahlungen)
- **Map-Modul** (Wertschöpfungs-Icons auf Map - wo wurde Value geschaffen?)
- **Wallet-Modul** (Value-Übersicht, Statistiken)
- **Log-Modul** (Transaktions-Log)

---

## Technische Details

### Frontend
- **Framework:** React (Web) + React Native (Mobile)
- **QR-Code-Lib:** react-qr-code (Generierung) + react-qr-scanner (Scan)
- **Offline Storage:** IndexedDB (Browser) + AsyncStorage (Mobile)
- **State Management:** Redux/Zustand (Value-State)

### Backend
- **Wertschöpfungs-Service:** Microservice für Value-Tracking
- **E-Minuto-Integration:** Sebastian's Rust-Code portieren (oder API-Integration)
- **API:** GraphQL Mutations für Value-Transfers
- **Datenbank:** PostgreSQL (Transaktions-Tabelle)
- **Blockchain:** Optional (für Transparenz-Logging)

### Money-Printer Integration
- **Tech-Stack Koordination:** Anton fragen, was er nutzt!
- **API-Integration:** REST oder GraphQL zwischen Wertschöpfungs-Modul und Money-Printer
- **QR-Code-Standard:** Gemeinsamer QR-Code-Format

### Web of Trust Integration
- **Keypair-Login:** Private/Public Keys für Offline/Online Sync
- **Verification:** QR-Codes prüfen gegen Public Keys
- **Verschlüsselung:** QR-Codes verschlüsseln mit Public Key des Empfängers

---

## MVP-Funktionen

**Für MVP (Phase 3 - Marktplatz):**
1. ✅ QR-Code-Scanner (Mobile)
2. ✅ QR-Code-Generator (Value senden)
3. ✅ Offline Value Tracking (lokal gespeichert)
4. ✅ Online Sync (Web of Trust Keypair-Login)
5. ✅ Transparenz (Offline vs. Online Value sichtbar)
6. ✅ Money-Printer Connection (API-Integration)
7. ✅ Token-Scheine (50 Dank, 100 Dank)

**Post-MVP:**
- Community-Währungen (Minuto, Grado, eigene Währungen)
- Umrechnungskurse (Minuto ↔ Dank ↔ €)
- Blockchain-Logging (optional)
- Wertschöpfungs-Icons auf Map
- Statistiken (wer hat wem wie viel gegeben)

---

## Offene Fragen

### 1. E-Minuto portieren oder API-Integration?
- **Option A:** Sebastian's Rust-Code portieren (mehr Kontrolle)
- **Option B:** API-Integration zu Sebastian's Server (einfacher)
- **Entscheidung:** Sebastian fragen!

### 2. Blockchain: Ja oder Nein?
- **Pro:** Transparenz, Fälschungssicherheit, Dezentralität
- **Contra:** Komplexität, Performance, Speicherplatz
- **Entscheidung:** Optional (Post-MVP)

### 3. Money-Printer: Welche Tech nutzt Anton?
- **Frage:** React? Backend? Datenbank?
- **Aktion:** Anton fragen, Tech-Stack dokumentieren!

### 4. Offline-Sync: Wie lösen wir Konflikte?
- **Problem:** User A ist offline, User B ist offline → beide scannen gleichen QR-Code
- **Lösung:** Sequenznummern + Web of Trust Verification
- **Entscheidung:** Konflikt-Lösung über Trust-Network

---

## Nächste Schritte

1. **Sebastian Garleck kontaktieren**
   - E-Minuto Technologie verstehen
   - Rust-Code anschauen
   - API-Integration evaluieren

2. **Anton kontaktieren (Money-Printer)**
   - Tech-Stack dokumentieren
   - API-Integration planen
   - QR-Code-Standard definieren

3. **Web of Trust Integration** planen
   - Keypair-Login für Offline/Online Sync
   - QR-Code-Verschlüsselung
   - Verification-Prozess

4. **Wireframes erstellen** (Figma)
   - QR-Code-Scanner UI
   - QR-Code-Generator UI
   - Value-Übersicht (Offline/Online)
   - Transaktions-Log

---

**Status:** NEU - Konzept - CRITICAL für Business!
**Nächster Schritt:** Sebastian + Anton kontaktieren, Tech-Stack koordinieren

---

*Erstellt am 6. Februar 2026*
*Wertschöpfung ohne Geld - das ist die Zukunft!* 💰
