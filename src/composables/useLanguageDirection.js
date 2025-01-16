import { ref } from 'vue'

export function useLanguageDirection() {
  const direction = ref('ltr')

  const detectLanguageDirection = (text) => {
    const rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/
    return rtlPattern.test(text) ? 'rtl' : 'ltr'
  }

  const handleLanguageDetection = (event) => {
    if (!event.target) return

    // Content moderation
    const forbiddenWords = ["fuck", "asshole", "bitch", "کیر", "کص مادرت", "کص", "کیرم دهنت", "bastard"]
    const inputContent = event.target.value.toLowerCase()
    for (const word of forbiddenWords) {
      if (inputContent.includes(word)) {
        event.target.value = event.target.value.replace(new RegExp(word, 'gi'), '****')
      }
    }

    // Direction detection
    direction.value = detectLanguageDirection(event.target.value)
    event.target.style.direction = direction.value
  }

  return {
    direction,
    handleLanguageDetection
  }
}
