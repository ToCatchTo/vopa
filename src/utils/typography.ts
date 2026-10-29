// Česká typografie: jednopísmenné předložky a spojky nesmí zůstat na konci řádku
export function nbsp(value: string): string {
  return value.replace(/(?<=^|[\s( ])([kKsSvVzZoOuUaAiI]) /g, '$1 ')
}
