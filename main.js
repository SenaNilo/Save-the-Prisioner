function saveThePrisoner(n, m, s) {
    return (((m % n) + (s - 1)) % n) || n;
}
