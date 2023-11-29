CREATE TABLE `usuario`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `usuario` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `fechaCreacion` TEXT NOT NULL,
    `ultimoIngreso` TEXT NOT NULL,
    `cantidadIngresos` INT NOT NULL,
    `rol` TEXT NOT NULL
);
CREATE TABLE `noticia`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` TEXT NOT NULL,
    `fecha` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL,
    `urlImg` TEXT NOT NULL,
    `idUsuario` INT NOT NULL
);
CREATE TABLE `directorio`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `cargo` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL,
    `urlImg` TEXT NOT NULL,
    `idUsuario` INT NOT NULL
);
CREATE TABLE `preguntasFrecuentes`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pregunta` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL,
    `idUsuario` INT NOT NULL
);
CREATE TABLE `slider`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` TEXT NOT NULL,
    `urlImg` TEXT NOT NULL,
    `idUsuario` INT NOT NULL
);
CREATE TABLE `estacion`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `telefono` TEXT NOT NULL,
    `fijo` TEXT NOT NULL,
    `correo` TEXT NOT NULL,
    `direccion` TEXT NOT NULL,
    `idUsuario` INT NOT NULL
);
ALTER TABLE
    `estacion` ADD CONSTRAINT `estacion_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `slider` ADD CONSTRAINT `slider_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `directorio` ADD CONSTRAINT `directorio_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `preguntasFrecuentes` ADD CONSTRAINT `preguntasfrecuentes_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `noticia` ADD CONSTRAINT `noticia_idusuario_foreign` FOREIGN KEY(`idUsuario`) REFERENCES `usuario`(`id`);