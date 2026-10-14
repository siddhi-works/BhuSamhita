# LAND-GPT · BhuSamhita

**One parcel. One ULPIN. Every connected land record.**

LAND-GPT is a land-record interoperability platform that connects fragmented state land systems through a common data model and ULPIN-based parcel identity. It is delivered to citizens and government officers as the BhuSamhita portal.

## The Problem

Land information in India is spread across separate state systems that do not speak to each other.

- **Different systems, different names.** The same facts live in the 7/12 and 8A (Maharashtra), Khatauni and Khasra (Uttar Pradesh), and VF 7/12 and VF 6 (Gujarat). Each has its own tables, terms and scripts.
- **No common parcel identity.** There is no single key that ties a parcel's ownership, registration, mutation, tax, planning and map records together.
- **Disagreements stay hidden.** Ownership in the record of rights can differ from the latest registered sale. A mutation can sit pending for months. The recorded area can differ from the mapped area. Nobody sees these gaps until a dispute.
- **Citizens chase records across portals.** Verifying one plot means visiting several departments, in different languages, with no way to tell which source to trust.
- **Officers work blind.** Staff handling mutations and verification have no consolidated, source-attributed view of a parcel.

## The Solution

LAND-GPT **federates** the existing state systems instead of replacing them. Each state keeps its own data and workflows. LAND-GPT adds a thin semantic layer on top.

```text
Citizen Portal  ·  Officer Portal
              |
         Unified API
              |
     Canonical Land Model
   (glossary · validation · provenance)
              |
        State Adapters
        /      |      \
      MH       UP      GJ
```

1. **ULPIN registry** gives every parcel one identity and records where its data lives.
2. **State adapters** read each state's own tables unchanged and map them into a canonical model.
3. **A deterministic glossary** resolves native terms (Ferfar, Namantaran, VF 6, खतौनी) to shared concepts.
4. **A validation engine** cross-checks records and explains every pass or failure.
5. **One API** serves a citizen portal and an officer workspace from the same facts.

## Features

### For citizens
- **ULPIN and survey-number search** across Maharashtra, Uttar Pradesh and Gujarat.
- **Parcel-level GIS map** with cadastral boundaries, village and district labels, multiple base maps, measuring tools and layers.
- **Unified Land Profile** per parcel: land record, ownership, registration, mutation, planning, building permission, encumbrance and litigation, property tax, utilities and environmental restrictions.
- **Plain-language verification** showing whether records are consistent, need attention, or disagree, with the reason.
- **State land-information pages** using each state's own record names.
- **Digital services directory** linking to the official state portals.
- **Four languages:** English, Hindi, Marathi and Gujarati.
- **Optional AI assistant** that answers questions using only the selected parcel's records and findings.

### For government officers
- **Role-based sign-in** by state, department and jurisdiction.
- **Work queue and mutation pipeline** with state-specific stages and actions (record note, issue notice, register objection, forward).
- **Parcel inspection** that puts the map, records and validation findings side by side.
- **Reports and data-quality views** across districts, with drill-down to individual findings.
- **Audit log** of every action taken.

### Data integrity
- **Read-only sources.** State records are never modified.
- **Full provenance.** Every canonical value carries its state, source system, table, record key and the untouched native row.
- **Explainable validation.** Rules compare ownership, registration, mutation lag, GIS and recorded area, encumbrances, planning and data quality, and report the exact evidence.
- **No fabrication.** A field is filled only from a native field, a glossary mapping or a unit conversion.
- **Store-agnostic.** The JSON demo store sits behind one interface so a production database can replace it without changing the adapters.

## Coverage

| State | Record systems modelled |
|---|---|
| Maharashtra | 7/12, 8A, Property Card, Ferfar (mutation) |
| Uttar Pradesh | Khatauni, Khasra, Namantaran (mutation) |
| Gujarat | VF 7/12, VF 8A, VF 6 (mutation) |

## Demo Environment

Data shown is replicated government-system data for demonstration purposes.

Brought to you by **AIgniters**.
