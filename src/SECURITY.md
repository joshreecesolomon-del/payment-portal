# Security Implementation — Payment Portal

## XSS Protection
React automatically escapes user input before rendering, preventing script injection.

## Injection Protection
Firebase Firestore uses NoSQL structured queries, preventing SQL injection attacks.

All inputs are validated using RegEx whitelisting.

## Brute Force Protection
Firebase Authentication limits repeated login attempts and applies rate limiting.

## Session Security
Firebase uses secure, time-limited authentication tokens to manage sessions.

## Man-in-the-Middle Protection
All traffic is encrypted using HTTPS (TLS), protecting data in transit.

## Additional Controls
- Input validation using RegEx
- Pre-created employee accounts (no registration allowed)
- Restricted access for staff portal