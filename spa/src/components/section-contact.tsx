import { UserDefault } from "./user-deafult";
import { Header } from "./header";
import { Search } from "./search";
import { ContactCardList } from "./contact-card-list";
import { BadgeList } from "./badge-list";
import { ContactListFooter } from "./contact-list-footer";
import { UserActions } from "./user-actions";


export function SectionContact() {

  return (
    <div className="flex flex-col w-full min-h-screen md:max-w-sm">
      <Header>
        <div>
          <UserDefault width={40} height={40} />
        </div>
        <UserActions/>
      </Header>
      <div className="px-4 py-2 flex flex-wrap gap-2 border-b border-gray-300">
        <Search />
        <BadgeList />
      </div>

      {/*ADCIONAR O OVERFLOW Y AQUI E USAR O CALC PARA O HEIGHT*/}
      <div className="flex-grow flex flex-col overflow-y-scroll contactList">
        <ContactCardList />
        <ContactListFooter />
      </div>
    </div>
  );
}