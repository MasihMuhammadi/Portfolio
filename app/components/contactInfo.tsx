const ContactInfo = ({ icon, text }: { icon: any; text: any }) => (
  <div className="flex items-center gap-x-4 px-4">
    <div className="bg-white p-2 w-12 content-center text-center text-black rounded-full">
      {icon}
    </div>
    <p className="flex-1 text-left text-[14px]">{text}</p>
  </div>
);
export default ContactInfo;
