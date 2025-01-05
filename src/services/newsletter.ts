import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.VITE_MAILCHIMP_API_KEY,
  server: process.env.VITE_MAILCHIMP_SERVER_PREFIX,
});

export const useNewsletter = () => {
  const subscribe = async (email: string, firstName?: string, lastName?: string) => {
    try {
      const response = await mailchimp.lists.addListMember(
        process.env.VITE_MAILCHIMP_LIST_ID || '',
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        }
      );
      return response;
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      throw error;
    }
  };

  return { subscribe };
};