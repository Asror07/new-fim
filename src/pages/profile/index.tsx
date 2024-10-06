import { Button, Flex, Progress } from 'antd';
import './main.scss';
import {
   Edit,
   Facebook,
   Instagram,
   Location,
   Whatsapp,
   Youtube,
} from 'iconsax-react';

const Profile = () => {
   return (
      <div className="profile">
         <div className="profile__header">
            <Flex
               className="profile__header--top"
               align="flex-end"
               justify="space-between"
            >
               <Flex gap={16}>
                  <img src="/public/user.png" alt="" />

                  <Flex vertical gap={4}>
                     <h2 className="title">Anna Adame</h2>
                     <h3>Owner & Founder</h3>
                     <Flex align="center" gap={4}>
                        <Location /> <span>Tashkent, Uzbekistan</span>
                     </Flex>
                  </Flex>
               </Flex>

               <Button
                  type="primary"
                  icon={<Edit size={22} />}
                  style={{ borderRadius: 12, height: 36 }}
               >
                  Edit profile
               </Button>
            </Flex>
         </div>

         <div className="profile__body">
            <div className="left">
               <section>
                  <h2>Complete your profile</h2>
                  <Progress percent={60} size="small" strokeColor="#15B6A4" />
               </section>

               <section>
                  <h2>Info</h2>
                  <Flex vertical gap={8}>
                     <Flex className="profile__body--info-item" gap={12}>
                        <h3>Full name :</h3>
                        <h4>Anna Davide</h4>
                     </Flex>
                     <Flex className="profile__body--info-item" gap={12}>
                        <h3>Mobile :</h3>
                        <h4>+(1) 987 6543</h4>
                     </Flex>
                     <Flex className="profile__body--info-item" gap={12}>
                        <h3>E-mail :</h3>
                        <h4>daveadame@velzon.com</h4>
                     </Flex>
                     <Flex className="profile__body--info-item" gap={12}>
                        <h3>Location :</h3>
                        <h4>California, United States</h4>
                     </Flex>
                     <Flex className="profile__body--info-item" gap={12}>
                        <h3>Joining Date</h3>
                        <h4>24 Nov 2021</h4>
                     </Flex>
                  </Flex>
               </section>

               <section>
                  <h2>Socials</h2>
                  <Flex gap={8}>
                     <div className="profile__body--social-item">
                        <Facebook />
                     </div>
                     <div className="profile__body--social-item">
                        <Instagram />
                     </div>
                     <div className="profile__body--social-item">
                        <Whatsapp />
                     </div>
                     <div className="profile__body--social-item">
                        <Youtube />
                     </div>
                  </Flex>
               </section>
            </div>
            <div className="right">
               <section>
                  <h2>About</h2>
                  <p>
                     Hi I'm Anna Adame, It will be as simple as Occidental; in
                     fact, it will be Occidental. To an English person, it will
                     seem like simplified English, as a skeptical Cambridge
                     friend of mine told me what Occidental is European
                     languages are members of the same family.
                     <br />
                     <br />
                     You always want to make sure that your fonts work well
                     together and try to limit the number of fonts you use to
                     three or less. Experiment and play around with the fonts
                     that you already have in the software you’re working with
                     reputable font websites. This may be the most commonly
                     encountered tip I received from the designers I spoke with.
                     They highly encourage that you use different fonts in one
                     design, but do not over-exaggerate and go overboard.
                  </p>
               </section>
            </div>
         </div>
      </div>
   );
};

export default Profile;
