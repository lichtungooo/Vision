# Strategie

Technische Strategie für den Real Life Stack.

## Dokumente

| Dokument | Beschreibung |
|----------|--------------|
| [tech-stack.md](tech-stack.md) | Technologien, Packages, Tools |
| [sicherheit.md](sicherheit.md) | Sicherheitsstrategie, Web of Trust |

## Architektur-Prinzipien

### Local-First
- Daten gehören dem User (IndexedDB)
- Offline-fähig
- Sync über CRDTs (Evolu)

### Connector-Based
- Module wissen nichts vom Backend
- DataInterface als Abstraktion
- Austauschbare Backends (WoT, REST, Mock)

### Generic Items
- Universelles Datenmodell für alle Module
- Typ + Attribute
- Sichtbarkeit über Web of Trust

## Siehe auch

- [Real Life Stack Module](../real-life-stack/)
- [Aktuelle Implementation](https://github.com/antontranelis/web-of-trust)
