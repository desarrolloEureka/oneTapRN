import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Terminos = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
        <Text style={styles.title}>Términos y condiciones</Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.background}>
        <View style={styles.innerContainer}>
          <ScrollView>
            <View style={styles.versionTextContainer}>
              <Text style={styles.versionText}>
                Aviso de privacidad La sociedad Redacol SAS, es una sociedad
                anónima constituida mediante documento privado del 13 de marzo
                de 2017 inscrita en la cámara de comercio de Medellín en el
                libro 9, bajo el número 7685, el 4 de abril de 2017, domiciliada
                en Medellín representada legalmente por el señor Juan Felipe
                Hernández Hernández, oferta productos y servicios relacionados
                con la tecnología NFC y en cumplimiento de la Ley 1581 de 2012 y
                demás normas concordantes, es responsable del tratamiento de sus
                datos personales. Los datos personales que Redacol SAS, solicita
                para la gestión de sus productos y servicios a través de este
                canal son: Nombre completo Número y clase de documento de
                identidad Celular y correo de contacto Dirección de domicilio
                Departamento y ciudad de residencia Los datos solicitados serán
                utilizados para los siguientes fines: Dar a conocer los
                servicios y productos ofrecidos por Redacol SAS Adelantar los
                trámites y servicios por usted solicitados Acceder a la
                cotización de nuestros productos y servicios Generar factura de
                venta de los productos adquiridos. Evaluar la calidad de los
                productos y servicios ofrecidos. De manera adicional,
                utilizaremos su información personal para las siguientes
                finalidades secundarias que no son necesarias para el servicio
                solicitado, pero que nos permiten y facilitan brindarle una
                mejor atención: Mercadotecnia o publicitaria Prospección
                comercial Como titular de información tiene derecho a conocer,
                actualizar y rectificar sus datos personales y, sólo en los
                casos en que sea procedente, a suprimirlos o revocar la
                autorización otorgada para su tratamiento conforme la política
                de tratamiento de datos de Redacol SAS, la que podrá consultar
                en nuestra página www.onetap.com.co Si desea presentar una
                consulta, reclamo o petición de información relacionada con la
                protección de datos personales puede comunicarse con nosotros al
                correo electrónico redacolsas@gmail.com y en el término previsto
                en los literales C y D el artículo 4 de nuestra política de
                tratamiento de datos la respuesta a su consulta o queja. El uso
                de tecnologías de rastreo en nuestro portal de internet Le
                informamos que en nuestra página de internet utilizamos cookies,
                web beacons u otras tecnologías, a través de las cuales es
                posible monitorear su comportamiento como usuario de internet,
                así como brindarle un mejor servicio y experiencia al navegar en
                nuestra página. Los datos personales que recogemos a través de
                estas tecnologías, los utilizaremos para los siguientes fines:
                para administrar y operar los servicios y productos que solicita
                o contrata con nosotros Los datos personales que obtenemos de
                estas tecnologías de rastreo son los siguientes:
                Identificadores, nombre de usuario y contraseñas de una sesión
                Idioma preferido por el usuario Región en la que se encuentra el
                usuario Tipo de navegador del usuario Tipo de sistema operativo
                del usuario Fecha y hora del inicio y final de una sesión de un
                usuario Páginas web visitadas por un usuario Búsquedas
                realizadas por un usuario Publicidad revisada por un usuario
                Listas y hábitos de consumo en páginas de compras El presente
                aviso de privacidad puede sufrir modificaciones, cambios o
                actualizaciones derivadas de nuevos requerimientos legales; de
                nuestras propias necesidades por los productos o servicios que
                ofrecemos; de nuestras prácticas de privacidad; de cambios en
                nuestro modelo de negocio, o por otras causas. Nos comprometemos
                a mantenerlo informado sobre los cambios que pueda sufrir el
                presente aviso de privacidad, a través de: la página de
                internet. El procedimiento a través del cual se llevarán a cabo
                las notificaciones sobre cambios o actualizaciones al presente
                aviso de privacidad es el siguiente: publicación de la
                actualización en el portal de internet
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingTop: 20
  },
  background: {
    backgroundColor: 'white', // Fondo gris
    width: 350,
    height: 585,
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden' // Asegura que el contenido dentro del fondo no sobresalga
  },
  innerContainer: {
    padding: 20
  },
  titleContainer: {
    marginBottom: 20
  },
  title: {
    color: '#396593',
    fontSize: 24
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  versionText: {
    color: 'black',
    fontSize: 18,
    marginTop: 1,
    textAlign: 'justify'
  },
  titleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    alignSelf: 'center',
    width: 250,
   
  },
  backButton: {
    position: 'absolute',
    left: -70,
    top: 10,
    zIndex: 1,
  },
  
});

export default Terminos;
