import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Politicas = () => {
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
        <Text style={styles.title}>Políticas de privacidad</Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.background}>
        <View style={styles.innerContainer}>
          <ScrollView>
            <View style={styles.versionTextContainer}>
              <Text style={styles.versionText}>
                Política de Administración y Manejo de Datos Personales De la
                Sociedad REDACOL SAS La sociedad Redacol SAS, es una sociedad
                anónima constituida mediante documento privado del 13 de marzo
                de 2017 inscrita en la cámara de comercio de Medellín en el
                libro 9, bajo el número 7685, el 4 de abril de 2017, domiciliada
                en Medellín representada legalmente por el señor Juan Felipe
                Hernández Hernández, identificado con la cedula de ciudadanía
                1.128.395.481;y la que en desarrollo de su objeto social tiene y
                custodia las bases de datos que contienen datos personales de
                sus empleados, exempleados, clientes y proveedores y que
                conforme las leyes 1581 de 2012, decreto 1377 de 2013 y las
                demás normas que adicionan y complementan la materia y para el
                efecto expide la política de tratamiento de información
                contenida en el presente documento. Articulo. 1. Declaración de
                existencia de bases de datos: La sociedad. en desarrollo de su
                objeto social ejecuta las siguientes actividades: - Contratación
                del personal indispensable para el funcionamiento de la sociedad
                - Contratación de los proveedores necesarios para la adquisición
                de productos, insumos y servicios requeridos para el desarrollo
                de su objeto social. - Prestación de los servicios descritos en
                nuestro objeto social a nuestros clientes En este sentido es
                titular de las bases de datos de clientes, empleados, aspirantes
                y proveedores de productos y servicios. Artículo 2. Declaración
                de responsabilidad: Derivado de la anterior declaración la
                sociedad Redacol SAS, identificada con el NIT 901069400-9,
                domiciliada en la ciudad de Medellín en la calle Calle 67 99 183
                apto 2231, se hace responsable del tratamiento de las bases de
                datos referidas y recibirá las consultas, solicitudes de
                corrección, rectificación y exclusión de la base de datos
                mediante solicitud escrita dirigida al domicilio principal de la
                sociedad. Artículo 3. Clases de bases de datos y finalidad: De
                acuerdo a la base de datos la sociedad. cumple las siguientes
                finalidades: Bases de datos de aspirantes: El proceso de
                tratamiento de datos personales de aspirantes tiene relación con
                la etapa de citación de aspirantes a entrevistas y pruebas
                técnicas, siendo el momento pertinente para obtener su
                autorización escrita para recolectar, almacenar, consultar,
                usar, circular y suprimir la información personal suministrada
                en la hoja de vida o currículo y sus correspondientes soportes,
                obteniendo también su autorización así como para transmitirla y
                transferirla. Bases de datos de empleados: El proceso de
                tratamiento de datos personales de empleados tiene relación con
                los procesos de contratación, pago de salarios, prestaciones
                sociales, vacaciones y otros derechos laborales previamente
                definidos, afiliación al sistema de seguridad social,
                certificación laboral, y desvinculación laboral. Una vez el
                empleado termina su vinculación de forma definitiva con la
                empresa sus datos personales serán tratados solo para las
                finalidades de certificación laboral, y consulta de historia
                laboral para acreditar requisitos para acceder la prestaciones
                económicas o asistencias ante el sistema de seguridad social
                integral. Bases de datos de proveedores de productos y
                servicios: El proceso de tratamiento de datos personales de
                proveedores de productos o servicios se limita a su inscripción
                como proveedor previa a la contratación del servicio o a la
                adquisición del producto, como requisito indispensable para la
                realizar la causación de los documentos de cobro de los
                servicios prestados y con la finalidad de certificar los
                vínculos contractuales existentes entre las partes. Bases de
                datos de clientes: El proceso de tratamiento de datos de
                clientes tiene por finalidad:  Mantener informado al cliente de
                los servicios que presta la sociedad.  Mantener con el cliente
                activo una comunicación permanente sobre el estado de cuenta de
                las obligaciones adquiridas con la sociedad buscando la
                extinción de la obligación, para ello la sociedad realiza el
                envío de estados de cuenta, información sobre acuerdos de pago,
                condonación de intereses, cartas de cobro persuasivo, documentos
                de cobro pre jurídico y jurídico, consulta de historial
                crediticio del deudor, reporte de las obligaciones constituidas
                en mora y cuyo recaudo no ha sido posible a las centrales de
                riesgo, indicando que la sociedad está autorizada desde el
                momento de vinculación del cliente por primera vez para este
                tratamiento y declarando que cuenta con la autorización para
                consulta y reporte en centrales de riesgo y que observa los
                plazos y procedimientos establecidos en la ley 1266 de 2008. 
                Realizar envío de información sobre temporadas especiales como
                día de la madre, el padre, san Valentín, día del amor y la
                amistad, navidad entre otros como una estrategia de fidelización
                de nuestros clientes.  Dar trámite a las solicitudes, quejas y
                reclamos generados como consecuencia de la prestación del
                servicio en los términos establecidos en la ley. Artículo 4.
                Derechos que el asisten al titular. El titular de la información
                contenida en las diferentes bases de datos, de conformidad con
                lo establecido en el artículo 8 de la ley 1581 de 2012 tendrá
                derecho a: a) Conocer los datos personales que ha registrado
                ante la sociedad al momento de su vinculación como cliente,
                empleado o proveedor, y a realizar las actualizaciones que
                considere necesarias a fin de lograr que los datos sean exactos,
                evitando que sean parciales, inexactos, incompletos,
                fraccionados o que induzcan a error. b) Conocer los datos
                personales que ha registrado ante la sociedad al momento de su
                vinculación como cliente, empleado o proveedor y a solicitar las
                rectificaciones que considere necesarias a fin de lograr que los
                datos sean exactos, evitando que sean parciales, inexactos,
                incompletos, fraccionados o que induzcan a error. c) A recibir
                dentro de los diez días hábiles siguientes contados a partir del
                recibo de la solicitud de consulta, la respuesta y en caso de no
                ser posible su respuesta durante este término a ser notificado
                de los motivos que generan la imposibilidad de responder dentro
                del término señalado. Con todo la respuesta a la consulta no
                podrá exceder los 5 días hábiles siguientes al vencimiento del
                primer término. d) A recibir dentro de los quince días hábiles
                siguientes contados a partir del recibo de la queja o reclamo,
                la respuesta y en caso de no ser posible su respuesta durante
                este término a ser notificado de los motivos que generan la
                imposibilidad de responder dentro del término señalado. Con todo
                la respuesta a la consulta no podrá exceder los 8 días hábiles
                siguientes al vencimiento del primer término. e) A ser requerido
                dentro de los 5 días siguientes a la formulación de una queja o
                reclamo para su completitud, en caso de encontrarse que se han
                omitido datos relevantes para su procesamiento y a ser
                notificado de la fecha en que vence el término para aportar la
                información faltante. El término para completar la información
                faltante en ningún caso podrá exceder de dos meses calendario
                contados a partir de la fecha en que se hayan solicitado
                completar la información. f) A que se incluya en la base de
                datos la leyenda de reclamo en trámite dentro de los 2 días
                siguientes al momento de la recepción de la solicitud y hasta el
                momento en que el reclamo sea decidido. g) Ser informado por la
                sociedad de forma previa a la toma de la autorización para el
                tratamiento de datos las finalidades con las que serán usados,
                el carácter facultativo de la respuesta cuando los datos a
                recaudar sean sensibles o comprometan menores de edad, los
                derechos que le asisten como titular y la identificación,
                dirección física o electrónica y teléfono del responsable del
                tratamiento de los datos entregados. h) Acceder en forma
                gratuita a los datos personales que hayan sido objeto de
                tratamiento por lo menos una vez cada mes calendario y cuando
                existan modificaciones sustanciales a la política de
                tratamientos de datos de la sociedad. i) Solicitar la prueba de
                la autorización otorgada por el titular para el tratamiento de
                sus datos salvo cuando se exceptúe como requisito conforme lo
                previsto en el artículo 10 de la ley 1581 de 2012. j) Revocar la
                autorización otorgada para el tratamiento de datos personales
                conforme los procedimientos establecidos por la sociedad k)
                Solicitar la supresión del dato cuando en el tratamiento no se
                respeten los principios, derechos y garantías constitucionales y
                legales previo concepto de la superintendencia de industria y
                comercio. l) Presentar ante la superintendencia de industria y
                comercio quejas por infracciones relacionadas con la ley 1581 de
                2012, el decreto 1377 de 2013 y las normas que adicionen,
                modifiquen y complementen las anteriormente mencionadas. m) Ser
                informado sobre el lugar donde estará exhibida la política de
                tratamiento de datos personales y los trámites relacionados con
                el tratamiento de estos datos según la calidad que se acredite
                ante la sociedad. Artículo 5. Asignación de responsables para la
                atención de consultas, reclamos y quejas. Siendo deber de la
                sociedad en su calidad de responsable de los datos personales de
                empleados, clientes y proveedores, garantizar a los titulares el
                pleno y efectivo ejercicio de su derecho al habeas data,
                tramitar las consultas y reclamos que se describen en el
                presente documento, e incluir las anotaciones de reclamo en
                curso cuando haya lugar a ellos, así como designar los
                responsables de atender las consultas y reclamaciones que se
                presenten acorde con su estructura. En consecuencias las
                siguientes solicitudes serán atendidas en el correo electrónico
                redacolsas@gmail.com: a) Actualización y rectificación de
                información. b) Revocatoria de la solicitud de autorización para
                el tratamiento de datos personales c) Supresión de datos
                personales d) Rectificación de datos personales e) Solicitud
                estado de cuenta de clientes Artículo 6. Seguridad y acceso a la
                información. La sociedad para el cabal cumplimiento de su objeto
                social y el desarrollo de las funciones propias del cargo asigna
                sus empleados un usuario y una contraseña para acceder a los
                sistemas de información de la sociedad, que le permite conocer
                los datos personales de un segmento de la población, según se
                describirá en los literales que a continuación se desarrollan,
                se prohíbe el empleado sustraer información de las bases de
                datos de la sociedad en beneficio propio, de un tercero a título
                gratuito u oneroso, así como divulgar los usuarios y las
                contraseñas que les permiten acceder al sistema de información y
                a las bases de datos en el contenidos. La empresa declara además
                que al momento de vinculación del empleado le asigna una cuenta
                de correo electrónico para el cabal desempeño de sus funciones y
                cuyo uso se limitará a la atención de asuntos de carácter
                laboral, manifestando que el momento de retiro definitivo del
                empleado son inhabilitados el usuario y la contraseña que le da
                acceso al sistema de información y la cuenta de correo
                electrónico institucional. a) Los empleados cuyas funciones
                estén relacionadas con la gestión del talento humano de la
                sociedad, tendrán acceso a las bases de datos de aspirantes,
                empleados activos y retirados, al archivo físico de historias
                laborales y a los archivos que contengan las autoliquidaciones
                de pago al sistema integral de seguridad social. b) Los
                empleados con funciones de facturación, recaudo y cartera
                tendrán acceso a las bases de datos de cliente activos,
                inactivos con cartera pendiente de recaudo e inactivos sin
                cartera. c) Los empleados con funciones de gestión documental,
                tendrán acceso a las historias laborales de los empleados
                activos y retirados, a los archivos que contengan las
                autoliquidaciones de pago al sistema integral de seguridad
                social y al archivo de comercio de la sociedad d) El
                administrador del sistema de información tendrá acceso al
                sistema de información completo, a las bases de datos en el
                contenidas y tendrá la potestad de asignar y bloquear usuarios y
                contraseñas de acceso. Artículo 7.Almacenamiento y Circulación
                de la información. La sociedad para el cabal desarrollo de su
                objeto social podrá suscribir con terceros contratos para la
                adquisición o arrendamiento de servidores en Colombia o en el
                extranjero, para la gestión de datos personales de sus clientes
                podrá utilizar software desarrollados por terceros y
                administrados por la sociedad, adquiriendo en este caso la
                empresa con la que se adquiera el servicio la calidad de
                encargado de tratamiento de datos en los que casos en que tenga
                acceso a las bases de datos que se carguen en el software,
                debiendo ceñirse a las políticas contractuales contenidas en el
                documento, en especial a lo referido a la cláusula de
                confidencialidad de la información, en la actualidad la sociedad
                tiene vigente los siguientes vínculos contractuales: Servicio
                Razon social del proveedor Vigencia del contrato Calidad que se
                adquiere frente al tratamiento de datos Licencia por servidor
                Responsable del tratamiento de datos Artículo 8. Modificación y
                actualización de la política. Conforme lo establecido en el
                artículo 5 y en el numeral 6 del artículo 13 del decreto 1377 de
                2013 la sociedad informará a los titulares de datos personales
                los cambios o modificaciones sustanciales de la política
                contenida en este documento buscando su conocimiento y
                comprensión como estrategia para garantizar el ejercicio de los
                derechos contenidos en la ley 1581 de 2012, el decreto
                reglamentario 1377 de 2013 y las normas que los adicionen
                modifiquen o complementen. Artículo 9. Entrada en vigencia. Las
                políticas de tratamiento de datos personales se encuentran
                vigentes a partir del 01 de enero de 2023 
                Juan Felipe Hernadez
                Hernandez Representante legal
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
    backgroundColor: 'white',
    width: 350,
    height: 585,
    borderRadius: 10,
    overflow: 'hidden'
  },
  innerContainer: {
    padding: 20
  },
  titleContainer: {
    marginBottom: 20,
    marginLeft: 50,
  },
  title: {
    color: '#396593',
    fontSize: 24
  },
  versionTextContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  titleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#396593',
    marginBottom: 10,
    alignSelf: 'center',
    width: 250,
   
  },
  versionText: {
    color: 'black',
    fontSize: 18,
    marginTop: 1,
    textAlign: 'justify'
  },
  backButton: {
    position: 'absolute',
    left: -70,
    top: 10,
    zIndex: 1,
  },
});

export default Politicas;
