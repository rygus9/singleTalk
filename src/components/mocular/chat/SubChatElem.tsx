import Profile from "../common/Profile";

export interface SubChatElemProps {
  postId: string;
  userId: string;
  userNickName: string;
  content: string;
}

export default function SubChatElem(data: SubChatElemProps) {
  return (
    <section>
      <div className="pt-2">
        <Profile nickname={data.userNickName} />
      </div>
      <p className="py-3">
        {data.content.split("\n").map((line, index) => {
          return (
            <span key={index}>
              {line}
              <br />
            </span>
          );
        })}
      </p>
    </section>
  );
}
