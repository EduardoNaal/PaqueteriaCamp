<template>
    <footer id="contact" class="footer">
      <p>&copy; 2024 PaqueteriaCamp. Todos los derechos reservados.</p>
      <p>Contacto: info@paqueteriacamp.com</p>
      <div class="social-icons">
        <a href="https://github.com/EduardoNaal"><img src="@/assets/github.png" alt="Github" /></a>
        <a href="#"><img src="@/assets/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="@/assets/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="@/assets/instagram.png" alt="Instagram" /></a>
      </div>
    </footer>
</template>
<script>

</script>
<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.footer p {
  margin: 0.5rem 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons img {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.2);
}
</style>