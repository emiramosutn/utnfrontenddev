-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-03-2025 a las 17:48:32
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_web_portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(10, 'El celular desaparecerá?', 'La predicción de Gates, Musk y Mark Zuckerberg.', 'Aunque los teléfonos móviles han sido el epicentro de la revolución tecnológica de las últimas dos décadas, algunas de las mentes más influyentes del sector tecnológico, como Bill Gates, Elon Musk y Mark Zuckerberg, aseguran que su dominio tiene los días contados. TEST'),
(8, 'Empieza una nueva era en la fabricación de chips', 'Intel ha producido 30.000 obleas en sus equipos UVE High-NA', 'Joseph Bonetti es uno de los ingenieros de Intel que defienden que esta compañía está a punto de volver a ser competitiva en la industria de la fabricación de semiconductores. Esta declaración suya de hace unos pocos días expresa muy bien su visión: \"Líderes de Intel, junta directiva de Intel y Administración de Donald Trump, por favor, no vendan ni cedan el control de Intel Foundry a TSMC justo cuando Intel está tomando la delantera tecnológica y empezando a despegar. Sería un error terrible y desmoralizante\".'),
(2, 'Alineación de 7 planetas', 'El fenómeno astronómico que no se repetirá hasta dentro de 467 años', 'Durante el atardecer y las primeras horas de la noche, los siete planetas principales del Sistema Solar —Saturno, Mercurio, Neptuno, Venus, Urano, Júpiter y Marte— se alinearán en una configuración única y rara, visible sin la necesidad de equipos telescópicos en su mayoría.'),
(6, 'Una cámara que identifica caras a 100 kilómetros', 'Un nuevo sistema de observación', 'La información proviene de South China Morning Post, que detalla cómo un equipo del Instituto de Investigación de Información Aeroespacial de la Academia China de Ciencias ha logrado observaciones exitosas con un innovador sistema láser. Este opera en longitudes de onda ópticas y ayuda a obtener imágenes a distancia enormes, si se cumplen ciertas condiciones.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'emiliano', '5375a8c23b0c030954e16dd262e9eaa8'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
