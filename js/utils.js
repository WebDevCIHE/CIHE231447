export function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength = 33;
    if (password.length >= 8) strength = 66;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$#?]/.test(password)) strength += 10;
    return strength;
  }
  
  export function updatePasswordStrengthMeter(strength, passwordStrength) {
    const strengthMeter = passwordStrength.firstElementChild;
    strengthMeter.style.width = strength + "%";
  
    if (strength < 50) {
      strengthMeter.className = "strength-weak";
    } else if (strength < 75) {
      strengthMeter.className = "strength-medium";
    } else {
      strengthMeter.className = "strength-strong";
    }
  }