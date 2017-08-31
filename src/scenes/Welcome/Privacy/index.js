import React, {Component} from "react"
import {ScrollView} from "react-native"
import {Paragraph} from "../../../components"
import styles from "./styles"

export default class Privacy extends Component {
  static navigationOptions = {
    title: "Privacy Policy"
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Paragraph>
          Pavandeep Sidhu built the DayNote app as a Free app. This SERVICE is
          provided by Pavandeep Sidhu at no cost and is intended for use as is.
        </Paragraph>
        <Paragraph>
          This page is used to inform website visitors regarding my policies
          with the collection, use, and disclosure of Personal Information if
          anyone decided to use my Service.
        </Paragraph>
        <Paragraph>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </Paragraph>
        <Paragraph>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at DayNote unless otherwise
          defined in this Privacy Policy.
        </Paragraph>
        <Paragraph style={styles.subtitle}>
          Information Collection and Use
        </Paragraph>
        <Paragraph>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information, including
          but not limited to your full name and email address. The information
          that I request is only stored on my server and your phone. I do not
          collect your data in any other way.
        </Paragraph>
        <Paragraph>
          The app does use a third party services that may collect information
          used to identify you. That third party service is Google Play
          Services. The privacy policy for Google Play Services can be found by
          going to the link "https://www.google.com/policies/privacy".
        </Paragraph>
        <Paragraph style={styles.subtitle}>Log Data</Paragraph>
        <Paragraph>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Cookies</Paragraph>
        <Paragraph>
          Cookies are files with small amount of data that is commonly used an
          anonymous unique identifier. These are sent to your browser from the
          website that you visit and are stored on your device internal memory.
        </Paragraph>
        <Paragraph>
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to
          collection information and to improve their services. You have the
          option to either accept or refuse these cookies and know when a cookie
          is being sent to your device. If you choose to refuse our cookies, you
          may not be able to use some portions of this Service.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Service Providers</Paragraph>
        <Paragraph>
          I may employ third-party companies and individuals due to the
          following reasons:
        </Paragraph>
        <Paragraph>
          To facilitate our Service; To provide the Service on our behalf; To
          perform Service-related services; or To assist us in analyzing how our
          Service is used. I want to inform users of this Service that these
          third parties have access to your Personal Information. The reason is
          to perform the tasks assigned to them on our behalf. However, they are
          obligated not to disclose or use the information for any other
          purpose.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Security</Paragraph>
        <Paragraph>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Links to Other Sites</Paragraph>
        <Paragraph>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Children’s Privacy</Paragraph>
        <Paragraph>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. In the case I discover that a child under 13 has provided me
          with personal information, I immediately delete this from our servers.
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact me so that I
          will be able to do necessary actions.
        </Paragraph>
        <Paragraph style={styles.subtitle}>
          Changes to This Privacy Policy
        </Paragraph>
        <Paragraph>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </Paragraph>
        <Paragraph style={styles.subtitle}>Contact Us</Paragraph>
        <Paragraph>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me by email at pav@pavsidhu.com.
        </Paragraph>
      </ScrollView>
    )
  }
}
